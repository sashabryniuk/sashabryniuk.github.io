import { useRef, useEffect } from "react";
import { background } from "./utils/gradient";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

const App = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        background();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="overflow-hidden h-full">
      <div className="w-full h-full" id="gradient">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default App;
