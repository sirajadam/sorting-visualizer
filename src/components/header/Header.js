import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <nav className={styles.nav}>
      <h1>Sorting Visualizer</h1>
    </nav>
  );
};

export default Header;
