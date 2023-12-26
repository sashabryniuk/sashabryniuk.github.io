import styles from "../styles/style";

const About = () => {
  return (
    <section className="flex justify-center pt-12 relative" id="about">
      <div className="w-[1280px] h-screen p-8 flex flex-col">
        <div className="absolute left-0 top-[15%] select-none">
          <img
            src="/images/Ellipse-2.png"
            alt=""
            className="w-[620px] h-[920px] object-cover"
          />
        </div>
        <h2 className={styles.heading2}>About:</h2>
        <div
          className={`rounded-[58px] bg-gray-950 bg-opacity-85 z-20 relative blur-class`}
        >
          <div className="outline-blur"></div>
          <div className="backdrop-blur-sm rounded-[58px] m-6">
            <p className="text-[#F5F5F5] text-4xl font-bold ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur odit totam quo temporibus voluptatem illo quisquam
              voluptatibus magnam iusto eligendi? Asperiores delectus corrupti
              id doloremque ipsa fugit, fugiat officiis sint?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
