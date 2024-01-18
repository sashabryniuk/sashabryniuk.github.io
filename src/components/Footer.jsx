import styles from "../styles/style";

const Footer = () => {
  return (
    <footer className="w-full mt-8">
      <div className="flex flex-col text-center">
        <h3 className="z-50 text-[24px]">
          <span className={`${styles.text} text-main-blue`}>Designed by </span>
          <a
            href="https://sashabryniuk.github.io/"
            className="text-main-blue hover:text-white duration-300"
          >
            Sasha
          </a>
        </h3>
        <h3 className="z-50 text-[24px]">
          <span className={`${styles.text} text-main-blue`}>Developed by </span>
          <a
            href="https://hashtab.github.io/"
            className="text-main-blue hover:text-white duration-300"
          >
            HashTab
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
