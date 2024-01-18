import { motion, useAnimation } from "framer-motion";
import { SKILLS } from "../constants/constants";
import styles from "../styles/style";
import AnimatedHeader from "./AnimatedHeader";
import "../styles/pieChart.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const skillsItem = ({ icon, title, percent }, index) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ "--p": percent });
    }
  }, [inView]);
  return (
    <div
      className={`flex flex-col items-center md:max-w-[224px] max-w-[150px] rounded-[10px] text-[#F5F5F5] p-8 hover:text-main-blue duration-100 bg-main-card-background ${styles.outline}`}
      key={index}
      ref={ref}
    >
      <div className="md:w-[90px] w-[50px]">{icon}</div>
      <h3 className={`${styles.text}`}>{title}</h3>
      <div className="relative mt-6">
        <motion.div
          className="pie no-round scale-x-[-1] md:w-[125px] w-[125px]"
          style={{ "--p": 0 }}
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <p className={`${styles.text}} scale-x-[-1]`}>{percent}%</p>
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <AnimatedHeader text={"skills"} />
      <div className="max-w-[1000px] mx-auto relative z-20">
        <div className="flex flex-row gap-[34px] justify-center flex-wrap md:p-0 p-4">
          {SKILLS.map((skill, index) => {
            return skillsItem(skill, index);
          })}
        </div>
      </div>
      <p className={`${styles.backgroundText} md:bottom-0 top-1/2 left-0`}>
        <span className="font-grotesk">*</span>SKI
        <br className="md:hidden" />
        LLS
      </p>
    </section>
  );
};

export default Skills;
