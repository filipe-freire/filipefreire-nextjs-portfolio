import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
