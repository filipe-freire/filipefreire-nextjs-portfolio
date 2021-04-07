import styles from "../styles/Contact.module.scss";
import HeadComp from "../components/HeadComp";
import { motion } from "framer-motion";

const Contact = () => {
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
            Reach out!{" "}
            <span role="img" aria-label="">
              ✉️
            </span>
          </h1>
          <p className={styles.paragraph}>
            I'm usually active in the following social media platforms ⬇️
          </p>
          <ul className={styles.socialList}>
            <li>
              <motion.div
                animate={{ scale: 2.8 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  className={styles.socialListItemTwitter}
                  href="https://twitter.com/Filipe__Freire"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              </motion.div>
            </li>
            <li className="social-list__item">
              <motion.div
                animate={{ scale: 2.8 }}
                transition={{ duration: 0.7 }}
              >
                <a
                  className={styles.socialListItemGithub}
                  href="https://github.com/filipe-freire/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                </a>
              </motion.div>
            </li>
            <li className="social-list__item">
              <motion.div
                animate={{ scale: 2.8 }}
                transition={{ duration: 0.9 }}
              >
                <a
                  className={styles.socialListItemLinkedIn}
                  href="https://linkedin.com/in/filiperpfreire/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </motion.div>
            </li>
            <li className="social-list__item">
              <motion.div
                animate={{ scale: 2.8 }}
                transition={{ duration: 1.1 }}
              >
                <a
                  className={styles.socialListItemInstagram}
                  href="https://www.instagram.com/filipe__freire/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </motion.div>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
