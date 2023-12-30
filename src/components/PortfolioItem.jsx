import styles from "../styles/style";

const PortfolioItem = ({ image, text, techStack, index }) => {
  return (
    <div
      className={`rounded-[58px] bg-gray-950 bg-opacity-85 z-20 relative blur-class ${styles.outline} cursor-pointer`}
    >
      <div
        className={`backdrop-blur-sm rounded-[58px] m-6 flex justify-between gap-[75px] ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="max-w-[490px] max-h-[360px]">
          <a href="">
            <img
              src={image}
              alt="logo"
              className="w-[100%] h-[100%] object-contain hover:scale-110 duration-300"
            />
          </a>
        </div>
        <div
          className={`text-[#F5F5F5] text-[32px] font-bold max-w-[50%] flex flex-col justify-center ${
            index % 2 === 0 ? "text-left" : "text-right"
          }`}
        >
          <p>{text}</p>
          <p className="mt-6 whitespace-break-spaces">{techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
