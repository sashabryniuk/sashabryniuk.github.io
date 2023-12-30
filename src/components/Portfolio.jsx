import { PROJECTS } from "../constants/constants";
import styles from "../styles/style";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="flex justify-center py-12 relative" id="portfolio">
      <div className="w-[1280px] p-8 flex flex-col text-center">
        <h2 className={styles.heading2}>Portfolio</h2>
        <div className="absolute right-0 top-[10%] select-none max-w-[1020px] max-h-[920px]">
          <img
            src="/images/Ellipse-3.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="absolute left-0 top-[60%] select-none max-w-[1020px] max-h-[920px]">
          <img
            src="/images/Ellipse-4.png"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col gap-20 mt-12">
          {PROJECTS.map((project, index) => {
            return <PortfolioItem {...project} index={index} key={index} />;
          })}
        </div>
        <p className="text-[32px] font-bold text-[#FFB800] mt-14">
          to be continued...
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
