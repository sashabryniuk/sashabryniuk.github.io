import { motion } from "framer-motion";
import { SKILLS } from "../constants/constants";
import styles from "../styles/style";

const skillsItem = ({ icon, title }, index) => {
  return (
    <motion.div
      key={index}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className={`${styles.skillsItem} ${styles.outline}`}
    >
      <div className="backdrop-blur-sm flex flex-col items-center gap-[10px] rounded-[58px] m-6">
        <div className="xl:w-[90px] md:w-[70px] w-[50px]">{icon}</div>
        <h3 className={`${styles.text} mt-4`}>{title}</h3>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="flex justify-center pt-12" id="skills">
      <div className="w-[1280px] p-8 flex flex-col text-center">
        <h2 className={styles.heading2}>WHAT SKILLS DO I HAVE?</h2>
        <div className="pt-10 flex flex-row gap-[35px] justify-center flex-wrap">
          {SKILLS.map((skill, index) => {
            return skillsItem(skill, index);
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
