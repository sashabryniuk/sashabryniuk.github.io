import styles from "../styles/style";

const About = () => {
  return (
    <section className="flex justify-center pt-12 relative" id="about">
      <div className="w-[1280px] h-screen p-8 flex flex-col">
        <div className="absolute left-0 select-none top-[20%] xl:max-w-[620px] md:max-w-[420px] max-w-[320px]">
          <img
            src="/images/Ellipse-2.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <h2 className={styles.heading2}>About:</h2>
        <div
          className={`rounded-[58px] bg-gray-950 bg-opacity-85 z-20 ${styles.outline} md:mt-12 mt-2`}
        >
          <div className="backdrop-blur-sm rounded-[58px] m-6 ">
            <p className={`${styles.text} text-main-yellow`}>
              Hello, my name is Sasha!
            </p>
            <p className={`${styles.text} mt-8`}>
              I am a fourth-year student at the Ukrainian Academy of Printing,
              majoring in graphic design.
            </p>
            <p className={`${styles.text} mt-8`}>
              Prior to this, I studied art for 6 years at an art school, which I
              successfully completed. And even took part in the All-Ukrainian
              competition "Flavorful Etude," where I secured the 2nd place.
            </p>
            <p className={`${styles.text} mt-8`}>
              Currently, I am eager to immerse myself in my field, staying
              updated on various design trends and constantly refining my skills
              to bring your desires to life. I specialize in logo design, web
              design, branding, social media visuals, and the preparation and
              development of printed materials. Additionally, I am passionate
              about sports and love the mountains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
