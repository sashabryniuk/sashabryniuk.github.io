import { PROJECTS } from "../constants/constants";
import styles from "../styles/style";
import PortfolioItem from "./PortfolioItem";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const projectCtrl = useAnimation();

  const animationSequence = async () => {
    await projectCtrl.start({ x: 0, opacity: 1 });
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const initial1 = { x: -1000, opacity: 0 };
  const initial2 = { x: 1000, opacity: 0 };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section className="flex justify-center py-12 relative" id="portfolio">
      <div className="w-[1280px] p-8 flex flex-col text-center">
        <h2 ref={ref} className={`${styles.heading2} z-10`}>
          Portfolio
        </h2>
        <div className="absolute right-0 top-[10%] select-none max-w-[1020px]">
          <img
            src="/images/Ellipse-3.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="absolute left-0 top-[60%] select-none max-w-[1020px]">
          <img
            src="/images/Ellipse-4.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col gap-20 mt-12">
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                initial={index % 2 === 0 ? initial1 : initial2}
                animate={projectCtrl}
                transition={{
                  duration: 1,
                  delay: index * 0.5,
                }}
                key={index}
              >
                <PortfolioItem {...project} index={index} />
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-row justify-center mt-14">
          <p className="text-[32px] font-bold text-[#FFB800] ">
            to be continued
          </p>
          <div className="dot-typing"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
