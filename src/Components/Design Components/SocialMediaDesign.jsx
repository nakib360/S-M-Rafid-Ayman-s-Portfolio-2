import { useNavigate } from "react-router";

const SocialMediaDesign = () => {
    const naviagete = useNavigate();
    return (
        <div className="min-h-screen">
            <p
                onClick={() => naviagete(-1)}
                className="mt-25 cursor-pointer rounded-full  px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#a855f7]/10 group-hover:text-white group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
            >
                ← Back to prvious
            </p>
        </div>
    );
};

export default SocialMediaDesign;

