import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ParallaxText } from "./ParallaxText";
import styles from "../styles/style";

const AnimatedHeader = ({ text }) => {
  const myElementRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    const element = myElementRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        setWidth(newWidth);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
      resizeObserver.disconnect();
    };
  }, [myElementRef]);

  useLayoutEffect(() => {
    const calculateRepeatCount = () => {
      if (width !== 0) {
        const containerWidth = window.innerWidth;
        const calculatedRepeatCount = Math.ceil(containerWidth / width) + 1;
        setRepeatCount(calculatedRepeatCount);
      }
    };

    calculateRepeatCount();

    window.addEventListener("resize", calculateRepeatCount);

    return () => {
      window.removeEventListener("resize", calculateRepeatCount);
    };
  }, [width, text, window.innerWidth]);

  const repeat = () => {
    const elements = [];
    elements.push(
      <span key={0} ref={myElementRef}>
        <p className={`${styles.animatedHeader}`}>
          <span className="font-grotesk">*</span>
          {text}
        </p>
      </span>
    );
    for (let i = 1; i < repeatCount; i++) {
      elements.push(
        <span key={i}>
          <p className={`${styles.animatedHeader}`}>
            <span className="font-grotesk">*</span>
            {text}
          </p>
        </span>
      );
    }
    return elements;
  };

  return (
    <div className="w-full overflow-hidden relative my-16">
      <div className="relative z-20 text-main-blue">
        <ParallaxText baseVelocity={-50} length={width + 16}>
          {repeat()}
        </ParallaxText>
      </div>
      <div className="absolute w-full md:top-[10px] top-[6px] text-transparent transparent-text">
        <ParallaxText baseVelocity={-50} length={width + 16}>
          {repeat()}
        </ParallaxText>
      </div>
    </div>
  );
};

export default AnimatedHeader;
