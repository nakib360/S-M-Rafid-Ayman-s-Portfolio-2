import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";

const ThumbnailDesign = () => {
  const { designs } = useLoaderData();
  const naviagete = useNavigate();
  const skeletonCards = Array.from({ length: 3 });

  return (
    <div className="min-h-screen">
      <button
        onClick={() => naviagete("/#services")}
        className="mt-25 mx-3 md:mx-10 text-xs md:text-sm border border-gray-500 rounded-full p-1.5 px-2.5 cursor-pointer hover:bg-gray-500"
      >
        ← Back to prvious
      </button>

      <div className="mt-10">
        <p className="font-extrabold text-3xl md:text-4xl text-center">Thumbnail Designs</p>

        <Suspense fallback={
          <div className="mx-auto my-10 w-full max-w-7xl px-3 md:px-8">
            <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
              {skeletonCards.map((_, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid overflow-hidden rounded-2xl backdrop-blur-xl"
                >
                  <div className="animate-pulse">
                    <div className="h-65 w-full rounded-xl bg-linear-to-br from-zinc-800/80 via-zinc-700/60 to-zinc-800/80" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }>
          <Await resolve={designs}>
            {(data) => (
              Array.isArray(data) && data.length > 0 ? (
                <div className="my-10 columns-1 gap-6 space-y-6 p-3 md:columns-2 md:p-8 lg:columns-3">
                  {data.map((design) => (
                    <div key={design._id} className="mb-6 break-inside-avoid overflow-hidden rounded-xl">
                      <img
                        src={design.imageUrl}
                        alt={design.title || "Thumbnail design"}
                        className="h-auto w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mx-auto my-10 w-full max-w-3xl px-4 md:px-8">
                  <div className="rounded-2xl border border-white/10 bg-[#0c0c0e]/80 p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] backdrop-blur-xl">
                    <p className="text-xl font-semibold text-zinc-100">No items yet</p>
                    <p className="mt-2 text-sm text-zinc-400">New designs will appear here soon.</p>
                  </div>
                </div>
              )
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ThumbnailDesign;
