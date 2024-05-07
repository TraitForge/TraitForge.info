import React, { useEffect } from 'react';
import styles from '../styles/gameplay.module.scss';

import { motion } from "framer-motion"

const GameplayPage = () => {

  useEffect(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let intervals = [];

    const runScrambleAnimation = (h1, index) => {
      let iteration = 0;
      clearInterval(intervals[index]);

      intervals[index] = setInterval(() => {
        h1.innerText = h1.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return h1.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= h1.dataset.value.length) {
          clearInterval(intervals[index]);
        }

        iteration += 1 / 3;
      }, 60);
    };

    const h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach((h1, index) => {
      runScrambleAnimation(h1, index);
    });

    return () => {
      intervals.forEach((interval, index) => clearInterval(interval));
    };
  }, []);

  return (
    <div className={`${styles.page} h-full w-screen flex flex-col items-center mb-72`}>
      <div className=" mt-32 flex flex-col items-center">
      <h1
        data-value="GAMEPLAY"
        className="text-5xl mb-4"
      >
      GAMEPLAY
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
       className="text-m text-center"
      >
        Discover the Core Mechanics and Features that <br/> Define Your Interactive Experience
      </motion.p>
      <div className="gap-14 mt-40 flex flex-col items-center h-full">
      <object className="h-full" type="image/svg+xml" data="/images/frame1.svg" width="800" height="800"/>              
      <object className="h-full" type="image/svg+xml" data="/images/frame2.svg" width="800" height="800"/>   
      <object className="h-full" type="image/svg+xml" data="/images/frame3.svg" width="800" height="800"/>   
      <object className="h-full" type="image/svg+xml" data="/images/frame4.svg" width="800" height="800"/>   
      </div>
      </div>
    </div>
  );
}

export default GameplayPage;
