import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.scss";

const projects = () => {
  return (
    <>
      <HeadComp title="Contact">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
          integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc="
          crossorigin="anonymous"
        />
      </HeadComp>

      {/* <motion.h1>another hey!</motion.h1> */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <div className={styles.contactLayout}>
          <h1 className={styles.title}>
            Projects!{" "}
            <span role="img" aria-label="">
              💼
            </span>
          </h1>
          <p className={styles.paragraph}>
            I'm usually active in the following social media platforms ⬇️
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default projects;
