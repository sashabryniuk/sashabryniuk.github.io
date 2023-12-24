import { useRef, useEffect } from "react";
import { drawCanvas } from "./utils/background";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";

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
      <Promo />
    </div>
  );
};
export default App;
