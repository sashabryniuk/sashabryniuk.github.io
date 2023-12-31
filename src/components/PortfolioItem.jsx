import styles from "../styles/style";

const PortfolioItem = ({ image, text, techStack, index, link }) => {
  return (
    <div
      className={`rounded-[58px] bg-gray-950 bg-opacity-85 z-20 relative blur-class ${styles.outline} cursor-pointer p-8`}
    >
      <div
        className={`backdrop-blur-sm rounded-[58px] m-6 flex justify-between items-center xl:gap-[75px] gap-8 flex-col ${
          index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
        }`}
      >
        <div className="max-w-[490px] max-h-[360px]">
          <a href={link} target="_blank">
            <img
              src={image}
              alt="logo"
              className="w-[100%] h-[100%] object-contain hover:scale-110 duration-300"
            />
          </a>
        </div>
        <div
          className={`${
            styles.text
          } xl:max-w-[50%] flex flex-col justify-center ${
            index % 2 === 0
              ? "xl:text-left text-right"
              : "xl:text-right text-left"
          }`}
        >
          <p>{text}</p>
          <p className="mt-6">
            The process involved:
            <br />
            {techStack.length >= 1
              ? techStack.map((tech, index) => (
                  <span key={index} className="text-main-yellow">
                    {tech}
                    {index !== techStack.length - 1 && (
                      <span className="separator text-[#F5F5F5]"> and </span>
                    )}
                  </span>
                ))
              : techStack}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
