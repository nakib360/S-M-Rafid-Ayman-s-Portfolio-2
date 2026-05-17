import { useEffect, useState } from "react";
import errAnimation from "../../assets/404-page-animation.gif";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (count === 0) {
            navigate("/");
            return;
        }

        const timer = setTimeout(() => {
            setCount(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count, navigate]);

    return (
        <div className="flex justify-center items-center bg-[#05050A] text-[#F9FAFB] font-['Inter'] min-h-screen">
            <div className="px-10 md:w-1/2 space-y-4">
                <img src={errAnimation} alt="page not found" />
                <p className="text-center">
                    Redirecting to home at {count} s.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;