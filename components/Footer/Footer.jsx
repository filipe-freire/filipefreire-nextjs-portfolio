import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © <span>Filipe Freire</span> | {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
