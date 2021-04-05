import styles from "./Button.module.scss";

const Button = ({ text }) => {
  return (
    <>
      <a className={styles.btn}>{text}</a>
    </>
  );
};

export default Button;
