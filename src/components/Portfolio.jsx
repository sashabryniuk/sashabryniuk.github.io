import { PROJECTS } from "../constants/constants";
import styles from "../styles/style";
import AnimatedHeader from "./AnimatedHeader";
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
    <section id="portfolio" className="relative">
      <AnimatedHeader text={"portfolio"} />
      <div className="max-w-[1000px] flex flex-col justify-start mx-auto">
        <h2 ref={ref}></h2>
        <div className="flex flex-col md:gap-20 gap-[35px] md:px-0 px-8 ">
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
        <div className="flex flex-row justify-center md:mt-14 mt-6">
          <p className={"text-[32px] text-main-blue"}>to be continued</p>
          <div className="dot-typing"></div>
        </div>
      </div>
      <p
        className={`${styles.backgroundText} vertical-text top-[100px] left-0`}
      >
        PORTFOLIO<span className="font-grotesk">*</span>
      </p>
    </section>
  );
};

export default Portfolio;
