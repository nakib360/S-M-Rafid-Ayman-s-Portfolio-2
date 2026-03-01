import { useEffect } from "react";
import About from "../Root Components/About";
import Contact from "../Root Components/Contact";
import Hero from "../Root Components/Hero";
import Process from "../Root Components/Process";
import Services from "../Root Components/Services";
import Testimonials from "../Root Components/Testimonials";
import TrustBar from "../Root Components/TrustBar";
import WhyRafid from "../Root Components/WhyRafid";

const HomePage = () => {
    useEffect(() => {
        document.title = "S M Rafid Ayman | Graphic Designer";

        const canonicalHref = window.location.origin + "/";
        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", canonicalHref);
    }, []);

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
