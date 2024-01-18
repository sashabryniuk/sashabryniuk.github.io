import styles from "../styles/style";

const Hero = () => {
  return (
    <section className="relative md:pt-[130px] pt-[60px]">
      <div className="max-w-[1280px] md:min-h-[862px] min-h-[400px] mx-auto p-8">
        <p className={`${styles.subheader}`}>HI, MY NAME IS</p>
        <div className="relative md:mt-6 mt-3">
          <p
            className={`${styles.header} ${styles.headerBack} md:top-[-32px] md:ml-8 ml-2 lg:block hidden`}
          >
            SASHA BRYNIUK
          </p>
          <h1 className={`${styles.header} relative z-20 md:ml-3 ml-[3px]`}>
            SASHA BRYNIUK
          </h1>
          <p
            className={`${styles.header} ${styles.headerBack} md:top-[32px] top-[8px]`}
          >
            SASHA BRYNIUK
          </p>
        </div>
        <p className={`${styles.subheader} md:mt-6 mt-3`}>
          i’m graphic <br className="md:hidden" /> designer
        </p>
      </div>
      <p className={`${styles.backgroundText} bottom-0 right-0`}>
        DES
        <br />
        IGN<span className="font-grotesk">*</span>
      </p>
    </section>
  );
};

export default Hero;
