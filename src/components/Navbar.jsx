import styles from "../styles/style";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-end md:p-7 p-3 uppercase fixed max-h-[70px] z-50 top-0 left-0 w-full bg-main-card-background backdrop-blur-md">
      <ul className="flex flex-row justify-between md:gap-[34px] gap-[20px]">
        <li>
          <a href="https://sashabryniuk.github.io/v1" className={styles.link}>
            v1
          </a>
        </li>
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
    </nav>
  );
};

export default Navbar;
