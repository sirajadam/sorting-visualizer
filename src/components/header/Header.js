import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-container"]}>
        <button className={styles.btn}>Generate</button>
        <button className={styles.btn}>Sort</button>
      </div>
    </nav>
  );
};

export default Header;
