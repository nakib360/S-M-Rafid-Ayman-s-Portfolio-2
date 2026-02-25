import { Outlet } from "react-router";
import Footer from "../Components/Root Components/Footer";
import Header from "../Components/Root Components/Header";

const Main = () => {
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
