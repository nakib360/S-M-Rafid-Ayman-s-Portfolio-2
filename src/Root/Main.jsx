import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Root Components/Footer";
import Header from "../Components/Root Components/Header";

const Main = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <div className="relative bg-[#05050A] text-[#F9FAFB] font-['Inter'] antialiased overflow-x-hidden selection:bg-[#C026FF]/30 selection:text-white min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
