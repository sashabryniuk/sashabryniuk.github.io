import styles from "../styles/style";

const Hero = () => {
  return (
    <section className="flex justify-center relative">
      <div className="w-[1280px] h-screen p-8 flex flex-col justify-center">
        <div className="absolute right-0 xl:top-[25%] md:top-[20%] top-[40%] select-none xl:max-w-[820px] md:max-w-[520px] max-w-[320px]">
          <img
            src="/images/Ellipse-1.png"
            alt=""
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <p className={`${styles.paragraphHero} md:block hidden`}>
          HI, MY NAME IS
        </p>
        <h1 className={styles.headingHero}>SASHA BRYNIUK</h1>
        <p className={styles.paragraphHero}>
          <span className="md:inline-block hidden">i’m</span> graphic designer
        </p>
      </div>
    </section>
  );
};

export default Hero;
