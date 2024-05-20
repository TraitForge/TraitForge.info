"use client";

import React, { useEffect } from "react";
import styles from "./GamePlay.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const GamePlay = () => {
  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let intervals = [];

    const runScrambleAnimation = (h2, index) => {
      let iteration = 0;
      clearInterval(intervals[index]);

      intervals[index] = setInterval(() => {
        h2.innerText = h2.dataset.value
          .split("")
          .map((_, index) => {
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
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div
      className={`${styles.container} h-full w-screen flex flex-col items-center mb-36`}
    >
      <div className="mt-32 flex flex-col items-center">
        <h2 data-value="GAMEPLAY" className="text-5xl mb-4">
          GAMEPLAY
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-m text-center w-[360px]"
        >
          Discover the Core Mechanics and Features that Define Your Interactive
          Experience
        </motion.p>
        <div className="gap-14 mt-40 flex flex-col items-center h-full p-4">
          <Image
            className="h-full"
            src="/images/frame1.svg"
            alt=""
            width="800"
            height="800"
          />
          <Image
            className="h-full"
            src="/images/frame2.svg"
            alt=""
            width="800"
            height="800"
          />
          <Image
            className="h-full"
            src="/images/frame3.svg"
            alt=""
            width="800"
            height="800"
          />
          <Image
            className="h-full"
            src="/images/frame4.svg"
            alt=""
            width="800"
            height="800"
          />
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
