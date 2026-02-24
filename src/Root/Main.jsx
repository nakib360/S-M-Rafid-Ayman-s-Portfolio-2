import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Process from "../Components/Process";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import TrustBar from "../Components/TrustBar";
import WhyRafid from "../Components/WhyRafid";

const Main = () => {
  return (
    <div className="bg-[#05050A] text-[#F9FAFB] font-['Inter'] antialiased overflow-x-hidden selection:bg-[#C026FF]/30 selection:text-white min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Process />
      <Services />
      <WhyRafid />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
