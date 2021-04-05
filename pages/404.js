import Link from "next/link";
import styles from "./404.module.scss";

const NotFound = () => {
  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>Oops...</h1>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          You're not supposed to be here!{" "}
          <span role="img" aria-label="">
            😱
          </span>
        </p>
        <Link href="/">
          <a className={styles.btn}>Head home!</a>
        </Link>
      </div>
      <div className={styles.notFoundImage}>
        <img src="./404-img.png" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
