import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href='/'>
          <a>
            <h1 className={styles.logo}>Filipe Freire</h1>
          </a>
        </Link>

        {/* Hamburguer Menu */}

        {/* Desktop Links */}
        <div className={styles.navLinksDesktop}>
          <ul>
            <li>
              <Link href='/'>
                <a className={styles.navLink}>Home</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className={styles.navLink}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className={styles.navLink}>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className={styles.navLink}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
