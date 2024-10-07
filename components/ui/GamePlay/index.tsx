"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./GamePlay.module.scss";

export const GamePlay = () => {
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
    <section
      className={`${styles.container} flex  justify-center items-center h-[80vh] w-full`}
    >
      <div className="md:w-7/12 xl:w-5/12 mx-auto flex flex-col items-center">
        <h2
          data-value="GAMEPLAY"
          className="text-5xl md:text-[64px] mb-4 from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text font-race text-center"
        >
          GAMEPLAY
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center font-monserat text-2xl"
        >
          Discover the Core Mechanics and Features that Define Your Interactive
          Experience
        </motion.p>
        <Link
          href={"https://traitforge.game/"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-6 bg-gradient-to-r from-[#057977] to-[#0ADFDB] mt-12 rounded-full font-race inline-block text-center"
        >
          Play Now (test-net)
        </Link>
      </div>
    </section>
  );
};
