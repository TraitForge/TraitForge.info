"use client";

import React, { useEffect } from "react";
import styles from "./GamePlay.module.scss";
import { BigCard } from "@/components/common/card/BigCard";
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
      <div className="mt-24 w-10/12 flex flex-col items-center">
        <h2 data-value="GAMEPLAY" className="headers bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent text-5xl mb-5 mt-36 text-center">
          GAMEPLAY
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-center w-[440px]"
        >
          Discover the Core Mechanics and Features that Define Your Interactive
          Experience
        </motion.p>
        <div className="gap-14 mt-16 flex flex-col w-10/12 items-center h-full p-5">
        <div className="border-[0.3px] w-10/12 border-[#057977] rounded-[20px] px-2 md:px-2 pt-4 pb-5 md:pt-4 bg-gradient-to-tr from-[#057977]/5 to-[#0ADFDB]/15 flex flex-row items-start justify-center h-full">
            <div className="flex justify-between items-center flex-col w-8/12">
              <div className="relative pt-1 md:pt-0 w-full">
                <div className="hidden md:block top-1 w-full">
                <svg width="507" height="40" viewBox="0 0 597 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.25H0.25V1.75H1V0.25ZM238.39 1L238.706 0.319776L238.555 0.25H238.39V1ZM320.214 39L319.898 39.6802L320.048 39.75H320.214V39ZM1 1.75H238.39V0.25H1V1.75ZM238.074 1.68022L319.898 39.6802L320.529 38.3198L238.706 0.319776L238.074 1.68022ZM320.214 39.75H597V38.25H320.214V39.75Z" fill="url(#paint0_linear_1558_6551)"/>
                  <defs>
                  <linearGradient id="paint0_linear_1558_6551" x1="-103.294" y1="-41.8827" x2="447.928" y2="294.784" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0ADFDB"/>
                  <stop offset="1" stop-color="#14494C"/>
                  </linearGradient>
                  </defs>
                  </svg>
                </div>
              </div>
             <div className="text-start flex flex-col justify-center items-start pt-[20px] pb-[40px]">
              <div className="w-5/12">
               <h1 className="text-[40px] headers">MINTING</h1>
               <img src="/images/dotsline.svg" alt="SVG Image" className="w-full h-auto pb-[20px]" />
               </div>
               <div className="w-10/12">
                 TraitForge has 10 generations, with 10,000 entity’s within each generation.
                 <br/>
                 <br/>
                 Each generation will have a base starting point of 0.005 ETH, with a maximum ETH price for the final entity unique to the generation.
               </div>
             </div>
             <div className="hidden md:block top-1 w-full">
             <svg width="507" height="40" viewBox="0 0 597 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.25H0.25V1.75H1V0.25ZM238.39 1L238.706 0.319776L238.555 0.25H238.39V1ZM320.214 39L319.898 39.6802L320.048 39.75H320.214V39ZM1 1.75H238.39V0.25H1V1.75ZM238.074 1.68022L319.898 39.6802L320.529 38.3198L238.706 0.319776L238.074 1.68022ZM320.214 39.75H597V38.25H320.214V39.75Z" fill="url(#paint0_linear_1558_6551)"/>
              <defs>
              <linearGradient id="paint0_linear_1558_6551" x1="-103.294" y1="-41.8827" x2="447.928" y2="294.784" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0ADFDB"/>
              <stop offset="1" stop-color="#14494C"/>
              </linearGradient>
              </defs>
              </svg>
             </div>
         </div>
         <Image src="/images/mergercard.png" alt="img" width="230" height="200"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GamePlay;
