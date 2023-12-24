const Footer = () => {
  return (
    <footer className="h-[90px] bg-black/30 w-full">
      <div className="flex justify-center">
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
