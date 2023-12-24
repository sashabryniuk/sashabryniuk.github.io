import { motion } from "framer-motion";
import { SKILLS } from "../constants/constants";

const Skills = () => {
  const skillsItem = ({ icon, title }) => {
    return (
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="max-w-[155px] rounded-[58px] backdrop-blur-sm flex 
        flex-col gap-[10px] content-center cursor-grab text-[#F5F5F5] hover:text-[#ffb800] hover:border-[5px] border-white duration-100 p-6"
      >
        <div className="flex justify-center">{icon}</div>
        <h3 className="text-[32px] font-bold">{title}</h3>
      </motion.div>
    );
  };
  return (
    <section className="flex justify-center pt-12" id="skills">
      <div className="w-[1280px] h-screen p-8 flex flex-col text-center">
        <h2 className="text-[64px] font-bold text-[#FFB800] uppercase">
          WHAT SKILLS DO I HAVE?
        </h2>
        <div className="pt-10 flex flex-row gap-[35px] justify-center">
          {SKILLS.map((skill) => {
            return skillsItem(skill);
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
