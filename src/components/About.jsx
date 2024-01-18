import styles from "../styles/style";
import AnimatedHeader from "./AnimatedHeader";
import { ABOUT } from "../constants/constants";
import Contacts from "./Contacts";

const AboutItem = ({ title, number, description, style }) => {
  return (
    <div
      className={`rounded-[10px] md:max-w-[415px] min-h-[125px] p-3 duration-300 ${
        style === "light"
          ? "bg-main-card-background-light animated-left"
          : "bg-main-blue animated-right "
      }`}
    >
      <h3
        className={`${styles.heading3} ${
          style === "light" ? "text-main-blue" : "text-main-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`absolute top-0 right-0 p-2 ${styles.heading3} font-light text-main-white`}
      >
        {number}
      </p>
      <p className={`${styles.text} text-main-white`}>{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative">
      <AnimatedHeader text={"about"} />
      <div className="md:max-w-[1000px] md:p-16 p-6 flex flex-col mx-auto rounded-[10px] bg-main-card-background overflow-hidden relative z-20">
        <div className="flex flex-row justify-between gap-[24px]">
          <div className="relative flex flex-col gap-[24px] justify-between">
            <h1 className={`${styles.header} relative z-20 md:ml-5`}>
              SASHA
              <br />
              BRYNIUK
            </h1>
            <p
              className={`${styles.header} ${styles.headerBack} md:top-[20px] top-[10px] left-0`}
            >
              SASHA
              <br />
              BRYNIUK
            </p>
            <p className={`${styles.text} text-main-blue max-w-[400px]`}>
              I am a fourth-year student at the Ukrainian Academy of Printing,
              majoring in graphic design
            </p>
          </div>
          <div className="relative z-20">
            <img
              src="images/photo.png"
              alt="photo"
              className="w-full h-auto bg-contain"
            />
          </div>
        </div>
        <h2 className={`mt-10 ${styles.heading2}`}>
          <span className="font-grotesk">*</span>education
        </h2>
        <div className="flex md:flex-row flex-col md:gap-[50px] gap-[12px] justify-between mt-8 relative z-20">
          {ABOUT.map((item) => (
            <AboutItem {...item} key={item.number} />
          ))}
        </div>
        <p className={`mt-8 ${styles.text} text-main-blue relative z-20`}>
          <span className="font-grotesk">*</span>While studying at the art
          school, I even took the 2nd place in the nationwide competition
          "Castle Etude".
        </p>
        <p className={`mt-8 ${styles.text} text-main-blue relative z-20`}>
          <span className="font-grotesk">*</span>Currently, I am eager to
          immerse myself in my field, staying updated on various design trends
          and constantly refining my skills to bring your desires to life. I
          specialize in logo design, web design, branding, social media visuals,
          and the preparation and development of printed materials.
          Additionally, I am passionate about sports and love the mountains.
        </p>
        <h2 className={`mt-10 ${styles.heading2}`}>
          <span className="font-grotesk">*</span>contacts
        </h2>
        <Contacts />
        <p
          className={`${styles.backgroundCardText} vertical-text bottom-[101%] right-0 rotate-180`}
        >
          <span className="font-grotesk">*</span>ARTIST
        </p>
      </div>
      <p className={`${styles.backgroundText} top-1/2 left-0`}>
        ABO
        <br />
        UT<span className="font-grotesk">*</span>
      </p>
    </section>
  );
};

export default About;
