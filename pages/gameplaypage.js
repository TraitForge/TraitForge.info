'use client'

import React, { useEffect } from 'react';
import styles from '../styles/gameplay.module.scss';

import { motion } from "framer-motion"

const GameplayPage = () => {

  useEffect(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let intervals = [];

    const runScrambleAnimation = (h2, index) => {
      let iteration = 0;
      clearInterval(intervals[index]);

      intervals[index] = setInterval(() => {
        h2.innerText = h2.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return h2.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= h2.dataset.value.length) {
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
      intervals.forEach((interval, index) => clearInterval(interval));
    };
  }, []);

  return (
    <div className={`${styles.page} h-full w-screen flex flex-col items-center mb-72`}>
      <div className=" mt-32 flex flex-col items-center">
      <h2
        data-value="GAMEPLAY"
        className="text-5xl mb-4"
      >
      GAMEPLAY
      </h2>
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
