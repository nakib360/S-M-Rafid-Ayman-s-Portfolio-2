import { useNavigate } from "react-router";

const ThumbnailDesign = () => {
  const naviagete = useNavigate();

  return (
    <div className="min-h-screen">
      <p
        onClick={() => naviagete("/#services")}
        className="mt-25 mx-10 inline-block cursor-pointer text-sm font-medium text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white"
      >
        ← Back to prvious
      </p>

      <div className="mt-10">
        <p className="font-extrabold text-4xl text-center">Thumbnail Designs</p>
      </div>
    </div>
  );
};

export default ThumbnailDesign;