import { useRef, useEffect } from "react";
import { drawCanvas } from "./utils/background";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawCanvas({ canvas, context });
  }, []);
  return (
    <div className="bg-black bg-gradient">
      <canvas ref={canvasRef}></canvas>
      <Navbar />
      <main>
        <Promo />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};
export default App;
