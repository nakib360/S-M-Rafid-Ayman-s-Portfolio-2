import About from "../Root Components/About";
import Contact from "../Root Components/Contact";
import Hero from "../Root Components/Hero";
import Process from "../Root Components/Process";
import Services from "../Root Components/Services";
import Testimonials from "../Root Components/Testimonials";
import TrustBar from "../Root Components/TrustBar";
import WhyRafid from "../Root Components/WhyRafid";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <TrustBar />
            <Process />
            <Services />
            <WhyRafid />
            <Testimonials />
            <About />
            <Contact />
        </div>
    );
};

export default HomePage;