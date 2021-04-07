import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";

const About = ({ url }) => {
  return (
    <>
      <HeadComp title="Contact"></HeadComp>
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
        <div className={styles.aboutContainer}>
          <img
            className={styles.profileImg}
            src={url}
            alt="Filipe Freire's profile"
          />
          <p className={`${styles.paragraph} ${styles.name}`}>Filipe Freire</p>
          <p className={styles.paragraph}>Full Stack Web Developer</p>

          <p className={styles.paragraph}>Currently in Goteborg, Sweden 🇸🇪</p>
        </div>
      </motion.div>
    </>
  );
};

export async function getStaticProps() {
  const url = "https://avatars.githubusercontent.com/u/45498579?v=4";

  return {
    props: {
      url,
    },
  };
}

export default About;
