import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ href, text, noOpener }) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.btn} rel={`${(noOpener && "noopener") || ""}`}>
          {text}
        </a>
      </Link>
    </>
  );
};

export default Button;
