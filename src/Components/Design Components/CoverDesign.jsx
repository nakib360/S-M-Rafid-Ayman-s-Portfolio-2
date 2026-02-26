import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";

const CoverDesign = () => {
  const { designs } = useLoaderData();
  const naviagete = useNavigate();

  return (
    <div className="min-h-screen">
      <p
        onClick={() => naviagete("/#services")}
        className="mt-25 mx-4 md:mx-10 inline-block cursor-pointer text-sm font-medium text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white"
      >
        ← Back to prvious
      </p>

      <div className="mt-10">
        <p className="font-extrabold text-4xl text-center">Cover Design Projects</p>

        <Suspense fallback={<p className="p-8 text-center text-zinc-300">Loading cover designs...</p>}>
          <Await resolve={designs}>
            {(data) => (
              <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.isArray(data) &&
                  data.map((design) => (
                    <div key={design._id} className="overflow-hidden rounded-xl">
                      <img
                        src={design.imageUrl}
                        alt={design.title || "Cover design"}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
              </div>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default CoverDesign;
