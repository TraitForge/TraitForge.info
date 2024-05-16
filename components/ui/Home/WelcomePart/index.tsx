import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./WelcomePart.module.scss";

const WelcomePart = () => {
  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let intervals: NodeJS.Timeout[] = [];

    const runScrambleAnimation = (h2: HTMLHeadingElement, index: number) => {
      let iteration = 0;
      clearInterval(intervals[index]);

      intervals[index] = setInterval(() => {
        h2.innerText = h2.dataset.value
          ?.split("")
          .map((_, index) => {
            if (index < iteration) {
              return h2.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= h2.dataset.value?.length) {
          clearInterval(intervals[index]);
        }

        iteration += 1 / 3;
      }, 60);
    };

    const h2Elements = document.querySelectorAll("h2");
    h2Elements.forEach((h2, index) => {
      runScrambleAnimation(h2, index);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <section className={styles.container} id="welcome">
      <div className="absolute left-32 items-start justify-center">
        <div className="flex flex-col items-start">
          <h2 data-value="FORGE" className="text-7xl mb-5">
            FORGE
          </h2>
          <h2 data-value="YOUR" className="text-7xl mb-5">
            YOUR
          </h2>
          <h2 data-value="DESTINY" className="text-7xl mb-5">
            DESTINY
          </h2>
        </div>

        <div className="text-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mint, Nuke and Forge Your Way to
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Infinite Possibilities!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WelcomePart;
