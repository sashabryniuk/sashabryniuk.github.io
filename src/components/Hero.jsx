import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/style";

const Hero = () => {
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
  }, [inView]);

  return (
    <>
      <section ref={ref} className="flex justify-center relative">
        <div className="w-[1280px] h-screen p-8 flex flex-col justify-center">
          <div className="absolute right-0 top-[15%] select-none max-w-[780px] max-h-[830px]">
            <img
              src="/images/Ellipse-1.png"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <motion.p
            /* initial={{ y: -500, opacity: 0 }}
            animate={paragraphCtrl}
            transition={{
              duration: 0.5,
              delay: 0,
            }} */
            className={styles.paragraphHero}
          >
            HI, MY NAME IS
          </motion.p>
          <motion.h1
            /* initial={{ x: -500, opacity: 0 }}
            animate={headingCtrl}
            transition={{
              duration: 0.5,
              delay: 0,
            }} */
            className={styles.headingHero}
          >
            SASHA BRYNIUK
          </motion.h1>
          <motion.p
            /* initial={{ y: 500, opacity: 0 }}
            animate={paragraphCtrl}
            transition={{
              duration: 0.5,
              delay: 0,
            }} */
            className={styles.paragraphHero}
          >
            i’m graphic designer
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Hero;
