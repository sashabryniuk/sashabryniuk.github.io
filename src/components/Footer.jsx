const Footer = () => {
  return (
    <footer className="h-[90px] w-full">
      <div className="flex flex-col text-center">
        <h3 className="z-50 text-[24px]">
          <span className="text-gradient">Designed by </span>
          <a
            href="https://sashabryniuk.github.io/"
            className="text-main-yellow hover:text-main-red duration-300"
          >
            Sasha
          </a>
        </h3>
        <h3 className="z-50 text-[24px]">
          <span className="text-gradient">Developed by </span>
          <a
            href="https://hashtab.github.io/"
            className="text-main-yellow hover:text-main-red duration-300"
          >
            HashTab
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
