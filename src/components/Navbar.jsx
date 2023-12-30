const Navbar = () => {
  return (
    <nav className="fixed h-[90px] bg-black/30 z-50 top-0 left-0 w-full backdrop-blur-sm">
      <div className="flex flex-row justify-between text-[24px] font-bold p-7 uppercase">
        <ul className="flex flex-row justify-between gap-[34px] ">
          <li>
            <a
              href="#about"
              className="text-main-yellow hover:text-main-red duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-main-yellow hover:text-main-red duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-main-yellow hover:text-main-red duration-300"
            >
              Portfolio
            </a>
          </li>
        </ul>
        <div>
          <a
            href=""
            className="text-main-yellow hover:text-main-red duration-300"
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
