const Navbar = () => {
  return (
    <nav className="fixed h-[90px] bg-black/30 z-50 top-0 left-0 w-full">
      <div className="flex flex-row justify-between text-[24px] font-bold p-7 uppercase">
        <ul className="flex flex-row justify-between gap-[34px]">
          <li>
            <a href="" className="text-gradient">
              About
            </a>
          </li>
          <li>
            <a href="" className="text-gradient">
              Skills
            </a>
          </li>
          <li>
            <a href="" className="text-gradient">
              Portfolio
            </a>
          </li>
        </ul>
        <div>
          <a href="" className="text-gradient">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
