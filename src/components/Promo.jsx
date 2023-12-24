import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Promo = () => {
  const paragraphCtrl = useAnimation();
  const headingCtrl = useAnimation();

  const animationSequence = async () => {
    await headingCtrl.start({ x: 0, opacity: 1 });
    await paragraphCtrl.start({ y: 0, opacity: 1 });
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
    if (!inView) {
      console.log("Promo not in view");
    }
  }, [inView]);

  return (
    <>
      <section ref={ref} className="flex justify-center">
        <div className="w-[1280px] h-screen p-8 flex flex-col justify-center">
          <motion.p
            initial={{ y: -500, opacity: 0 }}
            animate={paragraphCtrl}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            className="text-[#FFB800] text-[100px] font-normal leading-0"
          >
            HI, MY NAME IS
          </motion.p>
          <motion.h1
            initial={{ x: -500, opacity: 0 }}
            animate={headingCtrl}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            className="text-[100px] text-gradient font-normal leading-normal relative font-monoton"
          >
            SASHA BRYNIUK
          </motion.h1>
          <motion.p
            initial={{ y: 500, opacity: 0 }}
            animate={paragraphCtrl}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            className="text-[#FFB800] text-[95px] font-normal leading-0 uppercase"
          >
            i’m graphic designer
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Promo;
