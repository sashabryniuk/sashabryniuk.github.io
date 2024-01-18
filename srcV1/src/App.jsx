import { useRef, useEffect } from "react";
import { drawCanvas } from "./utils/background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

const App = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawCanvas({ canvas, context });
  }, []);
  return (
    <div className="bg-black overflow-hidden">
      <canvas ref={canvasRef} className="z-10"></canvas>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};
export default App;
