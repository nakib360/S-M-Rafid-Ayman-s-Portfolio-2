import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiImage,
  FiPlus,
  FiSave,
  FiTrash2,
  FiUpload,
  FiX,
} from "react-icons/fi";

const CATEGORIES = [
  { key: "social", title: "Social Media Designs" },
  { key: "thumbnail", title: "Thumbnail Designs" },
  { key: "logo", title: "Logo Designs" },
  { key: "cover", title: "Cover Designs" },
  { key: "manipulation", title: "Manipulation Designs" },
  { key: "print", title: "Print Designs" },
];

const createLocalId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const getItemId = (item) => item?._id || item?.id || "";
const MAX_UPLOAD_SIZE = 8 * 1024 * 1024;

const AdminPanel = () => {
  const apiBase = import.meta.env.VITE_API;
  const fileInputRefs = useRef({});

  const [imagesByCategory, setImagesByCategory] = useState({});
  const [pendingDeletes, setPendingDeletes] = useState({});
  const [pendingUploads, setPendingUploads] = useState({});

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [lastSavedAt, setLastSavedAt] = useState(null);

  const pendingDeleteCount = useMemo(
    () =>
      Object.values(pendingDeletes).reduce(
        (sum, idsByCategory) =>
          sum + Object.values(idsByCategory || {}).filter(Boolean).length,
        0
      ),
    [pendingDeletes]
  );

  const pendingUploadCount = useMemo(
    () =>
      Object.values(pendingUploads).reduce(
        (sum, uploads) => sum + (uploads?.length || 0),
        0
      ),
    [pendingUploads]
  );

  const totalImageCount = useMemo(
    () =>
      Object.values(imagesByCategory).reduce(
        (sum, images) => sum + (images?.length || 0),
        0
      ),
    [imagesByCategory]
  );

  const hasPendingChanges = pendingDeleteCount > 0 || pendingUploadCount > 0;

  const lastSavedText = lastSavedAt
    ? lastSavedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "Not saved yet";

  const revokeUploads = useCallback((uploads = []) => {
    uploads.forEach((item) => {
      if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
    });
  }, []);

  const revokeAllPendingUploads = useCallback((uploadsObject) => {
    Object.values(uploadsObject).forEach((uploads) => revokeUploads(uploads));
  }, [revokeUploads]);

  const getErrorMessageFromResponse = async (response, fallback) => {
    try {
      const data = await response.json();
      return data?.message || data?.error || fallback;
    } catch {
      try {
        const text = await response.text();
        return text || fallback;
      } catch {
        return fallback;
      }
    }
  };

  const fetchAllCategories = useCallback(async () => {
    if (!apiBase) {
      throw new Error("VITE_API is missing");
    }

    const entries = await Promise.all(
      CATEGORIES.map(async ({ key }) => {
        const response = await fetch(`${apiBase}/uploads?category=${key}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${key}`);
        }

        const data = await response.json();
        return [key, Array.isArray(data) ? data : []];
      })
    );

    return Object.fromEntries(entries);
  }, [apiBase]);

  const loadImages = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchAllCategories();
      setImagesByCategory(data);
    } catch (loadError) {
      setError(loadError?.message || "Failed to load designs");
    } finally {
      setLoading(false);
    }
  }, [fetchAllCategories]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = setTimeout(() => setNotice(""), 2200);
    return () => clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    return () => revokeAllPendingUploads(pendingUploads);
  }, [pendingUploads, revokeAllPendingUploads]);

  const toggleStageDelete = (categoryKey, itemId) => {
    setPendingDeletes((prev) => {
      const categoryDeletes = { ...(prev[categoryKey] || {}) };
      categoryDeletes[itemId] = !categoryDeletes[itemId];

      if (!categoryDeletes[itemId]) {
        delete categoryDeletes[itemId];
      }

      return {
        ...prev,
        [categoryKey]: categoryDeletes,
      };
    });
  };

  const stageUploadFiles = (categoryKey, fileList) => {
    const files = Array.from(fileList || []);
    if (!files.length) return;

    const validFiles = files.filter((file) => {
      if (!file.type?.startsWith("image/")) {
        setError(`Only image files are allowed (${file.name})`);
        return false;
      }

      if (file.size > MAX_UPLOAD_SIZE) {
        setError(`File too large (${file.name}). Max 8MB per image.`);
        return false;
      }

      return true;
    });

    if (!validFiles.length) return;

    const staged = validFiles.map((file) => ({
      localId: createLocalId(),
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setPendingUploads((prev) => ({
      ...prev,
      [categoryKey]: [...(prev[categoryKey] || []), ...staged],
    }));
  };

  const removeStagedUpload = (categoryKey, localId) => {
    setPendingUploads((prev) => {
      const categoryUploads = prev[categoryKey] || [];
      const toRemove = categoryUploads.find((item) => item.localId === localId);
      if (toRemove?.previewUrl) URL.revokeObjectURL(toRemove.previewUrl);

      return {
        ...prev,
        [categoryKey]: categoryUploads.filter((item) => item.localId !== localId),
      };
    });
  };

  const discardChanges = () => {
    revokeAllPendingUploads(pendingUploads);
    setPendingDeletes({});
    setPendingUploads({});
    setNotice("Staged changes discarded");
  };

  const saveChanges = async () => {
    if (!hasPendingChanges) return;
    if (!apiBase) {
      setError("VITE_API is missing in frontend environment");
      return;
    }

    setSaving(true);
    setError("");

    try {
      for (const { key } of CATEGORIES) {
        const ids = Object.keys(pendingDeletes[key] || {}).filter(
          (id) => pendingDeletes[key][id]
        );

        for (const id of ids) {
          const response = await fetch(`${apiBase}/uploads/${id}`, {
            method: "DELETE",
          });

          if (!response.ok) {
            throw new Error(
              await getErrorMessageFromResponse(
                response,
                `Failed to delete image (${id})`
              )
            );
          }
        }
      }

      for (const { key } of CATEGORIES) {
        const uploads = pendingUploads[key] || [];

        for (const upload of uploads) {
          const formData = new FormData();
          formData.append("file", upload.file, upload.file.name);
          formData.append("category", key);
          formData.append("title", upload.file.name);

          const response = await fetch(`${apiBase}/uploads`, {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            const backendMessage = await getErrorMessageFromResponse(
              response,
              `Failed to upload ${upload.file.name}`
            );
            throw new Error(
              `[${response.status}] ${backendMessage} (file: ${upload.file.name}, category: ${key})`
            );
          }
        }
      }

      revokeAllPendingUploads(pendingUploads);
      setPendingDeletes({});
      setPendingUploads({});
      await loadImages();
      setLastSavedAt(new Date());
      setNotice("All changes saved successfully");
    } catch (saveError) {
      setError(saveError?.message || "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const getCategoryItems = (categoryKey) => {
    const existing = imagesByCategory[categoryKey] || [];
    const stagedDeletes = pendingDeletes[categoryKey] || {};
    const stagedUploads = pendingUploads[categoryKey] || [];

    const existingItems = existing.map((item) => ({
      type: "existing",
      id: getItemId(item),
      imageUrl: item.imageUrl,
      title: item.title || "Design image",
      markedForDelete: Boolean(stagedDeletes[getItemId(item)]),
    }));

    const uploadItems = stagedUploads.map((item) => ({
      type: "upload",
      id: item.localId,
      imageUrl: item.previewUrl,
      title: item.file?.name || "New upload",
      markedForDelete: false,
    }));

    return [...existingItems, ...uploadItems];
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-300 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="pointer-events-none fixed top-[-20%] left-[-10%] z-0 h-[50%] w-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
      <div className="pointer-events-none fixed right-[-10%] bottom-[-20%] z-0 h-[50%] w-[50%] rounded-full bg-indigo-900/10 blur-[120px]" />

      <main className="relative z-10 w-full">
        <div className="custom-scrollbar mx-auto max-w-425 px-3 py-4 sm:px-5 sm:py-6 md:px-8">
          <section className="sticky top-2 z-20 mb-6 rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_10px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 border-b border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
              <div>
                <p className="text-xs font-medium tracking-[0.15em] text-indigo-300 uppercase">
                  Design Components Manager
                </p>
                <h1 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  Portfolio Admin Panel
                </h1>
                <p className="mt-1 text-xs text-slate-400">
                  Changes are staged first. Use Save to apply or Discard to reset.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={discardChanges}
                  disabled={!hasPendingChanges || saving}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/25 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FiX />
                  Discard
                </button>
                <button
                  type="button"
                  onClick={saveChanges}
                  disabled={!hasPendingChanges || saving}
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FiSave />
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-5 md:p-5">
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-[11px] tracking-wide text-slate-400 uppercase">
                  Categories
                </p>
                <p className="mt-1 text-lg font-semibold text-white">{CATEGORIES.length}</p>
              </div>
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3">
                <p className="text-[11px] tracking-wide text-indigo-200 uppercase">
                  Total Images
                </p>
                <p className="mt-1 text-lg font-semibold text-indigo-100">
                  {totalImageCount}
                </p>
              </div>
              <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-3">
                <p className="text-[11px] tracking-wide text-sky-200 uppercase">
                  Pending Uploads
                </p>
                <p className="mt-1 text-lg font-semibold text-sky-100">
                  {pendingUploadCount}
                </p>
              </div>
              <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3">
                <p className="text-[11px] tracking-wide text-rose-200 uppercase">
                  Pending Deletes
                </p>
                <p className="mt-1 text-lg font-semibold text-rose-100">
                  {pendingDeleteCount}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-[11px] tracking-wide text-slate-400 uppercase">
                  Last Save
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-slate-200">
                  <FiClock className="text-slate-400" />
                  {lastSavedText}
                </p>
              </div>
            </div>

            {notice ? (
              <div className="mx-4 mb-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200 md:mx-5">
                <FiCheckCircle />
                {notice}
              </div>
            ) : null}

            {error ? (
              <div className="mx-4 mb-4 inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-200 md:mx-5">
                <FiAlertCircle />
                {error}
              </div>
            ) : null}
          </section>

          {loading ? (
            <section className="rounded-xl border border-white/10 bg-white/2 p-8 text-center shadow-[0_10px_35px_rgba(2,6,23,0.35)] backdrop-blur-md">
              <p className="text-sm text-slate-300">Loading design components...</p>
            </section>
          ) : (
            <div className="space-y-6 pb-20">
              {CATEGORIES.map((category) => {
                const items = getCategoryItems(category.key);

                return (
                  <section
                    key={category.key}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/2 shadow-[0_10px_35px_rgba(2,6,23,0.35)] backdrop-blur-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/1 px-4 py-3 sm:px-5">
                      <h2 className="text-base font-semibold text-white">{category.title}</h2>
                      <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-slate-400">
                        {(imagesByCategory[category.key] || []).length} existing • {(pendingUploads[category.key] || []).length} staged
                      </span>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                        {items.map((item) => {
                          const isExisting = item.type === "existing";

                          return (
                            <div
                              key={`${item.type}-${item.id}`}
                              className={`group relative overflow-hidden rounded-xl border ${
                                item.markedForDelete
                                  ? "border-red-500/40"
                                  : "border-white/10"
                              } bg-black/20`}
                            >
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className={`aspect-square w-full object-cover transition ${
                                  item.markedForDelete ? "opacity-35" : "group-hover:opacity-90"
                                }`}
                                loading="lazy"
                              />

                              {isExisting ? (
                                <button
                                  type="button"
                                  onClick={() => toggleStageDelete(category.key, item.id)}
                                  className={`absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md border backdrop-blur-sm transition ${
                                    item.markedForDelete
                                      ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-200 opacity-100"
                                      : "border-white/15 bg-black/65 text-slate-200 opacity-0 group-hover:opacity-100 hover:text-red-300"
                                  }`}
                                  title={item.markedForDelete ? "Undo delete" : "Delete"}
                                >
                                  {item.markedForDelete ? <FiCheckCircle /> : <FiTrash2 />}
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => removeStagedUpload(category.key, item.id)}
                                  className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-black/65 text-slate-200 opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:text-red-300"
                                  title="Remove upload"
                                >
                                  <FiX />
                                </button>
                              )}

                              <div className="absolute right-2 bottom-2 left-2 flex items-center justify-between rounded-md bg-black/60 px-2 py-1 text-[11px] backdrop-blur-sm">
                                <span className="truncate pr-2 text-slate-300">{item.title}</span>
                                {item.type === "upload" ? (
                                  <span className="rounded bg-indigo-500/25 px-1.5 py-0.5 text-indigo-200">
                                    New
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          );
                        })}

                        <button
                          type="button"
                          onClick={() => fileInputRefs.current[category.key]?.click()}
                          className="group flex aspect-square flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/20 p-4 text-center transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
                        >
                          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-indigo-500/20">
                            <FiPlus className="text-lg text-slate-200" />
                          </div>
                          <p className="text-sm font-medium text-slate-200">Upload Image</p>
                          <p className="mt-1 text-xs text-slate-500">PNG, JPG</p>
                          <input
                            ref={(element) => {
                              fileInputRefs.current[category.key] = element;
                            }}
                            type="file"
                            accept="image/png,image/jpeg,image/jpg"
                            multiple
                            onChange={(event) => {
                              stageUploadFiles(category.key, event.target.files);
                              event.target.value = "";
                            }}
                            className="hidden"
                          />
                        </button>
                      </div>

                      {!items.length ? (
                        <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-slate-400">
                          <div className="inline-flex items-center gap-2">
                            <FiImage />
                            No images in this category yet.
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.14);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.24);
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
