import HeadComp from "../components/HeadComp";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Projects.module.scss";
import { useState } from "react";

const images = [
  "assets/img/JavaScripting.webp",
  "assets/img/Bandtracker.webp",
  "assets/img/Vanilla-Jobs.webp",
];

const projectsArr = [
  {
    title: "JavaScripting, The Game",
    description: `Built using JavaScript Object Oriented Programming architecture
and HTML canvas.`,
  },
  {
    title: "BandTracker",
    description: `Allows the user to search for his favorite bands/artists and
check whether they're performing and where. Built using NodeJS,
ExpressJS, Handlebars and API integrations.`,
  },
  {
    title: "Vanilla Jobs",
    description: `A Web Develompent job search Single Page Application (SPA) using
React and REST API. Built mobile first using SCSS.`,
  },
];

const Projects = () => {
  const [count, setCount] = useState(0);
  const [cardPosition, setcardPosition] = useState(300);

  function handleClick(e) {
    if (e.target.textContent === "⬅️") {
      setcardPosition(-300);
      return !count ? setCount(2) : setCount(count - 1);
    } else {
      setcardPosition(300);
      return count === 2 ? setCount(0) : setCount(count + 1);
    }
  }

  return (
    <>
      <HeadComp title="Contact"></HeadComp>
      <motion.div
        className={styles.container}
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
            My Projects{" "}
            <span role="img" aria-label="">
              💻
            </span>
          </h1>
          {/* <p className={styles.paragraph}>
            I'm usually active in the following social media platforms ⬇️
          </p> */}
        </div>
        <button
          onClick={(e) => handleClick(e)}
          className={`${styles.btn} ${styles.left}`}
        >
          ⬅️
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className={`${styles.btn} ${styles.right}`}
        >
          ➡️
        </button>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.projectCard}
            key={count}
            initial={{ x: cardPosition, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.4,
              transition: { duration: 0.2 },
            }}
          >
            <div>
              <div>
                <h1 className={styles.projectTitle}>
                  {projectsArr[count].title}
                </h1>
                <p className={styles.projectInfo}>
                  {projectsArr[count].description}
                </p>
              </div>
              <div className={styles.projectImg}>
                <img src={images[count]} alt="" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Projects;
