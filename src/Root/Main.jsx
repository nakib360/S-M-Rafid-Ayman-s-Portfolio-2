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
import Work from "../Components/Work";

const Main = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      <Hero />
      <TrustBar />
      <Process />
      <Services />
      <Work />
      <WhyRafid />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;