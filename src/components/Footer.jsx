const Footer = () => {
  return (
    <footer className="h-[90px] bg-black/30 w-full">
      <div className="flex flex-col text-center">
        <h3 className="z-50 text-[24px]">
          <span className="text-gradient">Designed by </span>
          <a
            href="https://sashabryniuk.github.io/"
            className="text-[#ffb800] hover:text-[#ee1d00] duration-300"
          >
            Sasha
          </a>
        </h3>
        <h3 className="z-50 text-[24px]">
          <span className="text-gradient">Developed by </span>
          <a
            href="https://hashtab.github.io/"
            className="text-[#ffb800] hover:text-[#ee1d00] duration-300"
          >
            HashTab
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
