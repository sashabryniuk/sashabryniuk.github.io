import styles from "../styles/style";

const Navbar = () => {
  return (
    <nav className="fixed h-[90px] bg-black/30 z-50 top-0 left-0 w-full backdrop-blur-sm">
      <div className="flex flex-row justify-between md:text-[24px] text-[16px] font-bold p-7 uppercase">
        <ul className="flex flex-row justify-between md:gap-[34px] gap-[20px]">
          <li>
            <a href="#about" className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.link}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className={styles.link}>
              Portfolio
            </a>
          </li>
        </ul>
        <div>
          <a href="" className={styles.link}>
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
