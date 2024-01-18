import styles from "../styles/style";

const PortfolioItem = ({ image, text, techStack, index, link }) => {
  return (
    <div
      className={`overflow-hidden relative rounded-[10px] md:p-8 p-4 flex flex-col justify-start items-center xl:gap-[57px] gap-8 cursor-pointer bg-main-card-background ${
        styles.outline
      } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="md:max-w-[50%] max-w-[90%] relative z-20">
        <a href={link} target="_blank">
          <img
            src={image}
            alt="logo"
            className={`w-full h-auto object-contain duration-300 ${
              index % 2 === 0 ? "animated-left" : "animated-right"
            }`}
          />
        </a>
      </div>
      <div
        className={`${
          styles.text
        } relative z-20 md:max-w-[40%] flex flex-col text-main-white ${
          index % 2 === 0
            ? "md:text-left text-right"
            : "md:text-right text-left"
        }`}
      >
        <p>{text}</p>
        <p className="mt-6">
          The process involved:
          <br />
          {techStack.length >= 1
            ? techStack.map((tech, index) => (
                <span key={index} className="text-main-blue">
                  {tech}
                  {index !== techStack.length - 1 && (
                    <span className="text-main-white"> and </span>
                  )}
                </span>
              ))
            : techStack}
        </p>
      </div>
      <p
        className={`${
          styles.backgroundCardPortfolioText
        } md:top-[125px] bottom-0 ${
          index % 2 === 0
            ? "md:right-[-10px] md:left-auto left-[-5px]"
            : "md:left-[-10px] right-[-5px]"
        }`}
      >
        {index + 1}
      </p>
    </div>
  );
};

export default PortfolioItem;
