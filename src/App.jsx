import { useRef, useEffect } from "react";
import { drawCanvas } from "./utils/background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

const App = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawCanvas({ canvas, context });
  }, []);
  return (
    <div className="bg-black bg-gradient">
      <canvas ref={canvasRef} className="z-10"></canvas>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};
export default App;
