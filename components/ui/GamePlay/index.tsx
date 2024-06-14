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
      <div className="mt-32 w-10/12 flex flex-col items-center">
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
        <div className="gap-14 mt-16 flex flex-col w-full items-center h-full p-5">
      <div className="relative w-full h-full">
        <svg
           viewBox="0 0 600 290"
           preserveAspectRatio="xMidYMid meet"
           className="w-full h-auto"
        >
         <image href="/images/frame1.svg" width="600" height="290" />
         <text x="30" y="60" font-family="Electrolize" font-size="30" fill="white" text-anchor="start" alignment-baseline="middle"> MINTING </text>
         <image x="30" y="85" href="/images/dotsline.svg" width="200" height="20" />
         <text x="20" y="120" font-family="Electrolize" font-size="13" fill="white" text-anchor="start" alignment-baseline="middle">
          <tspan x="30" dy="1.2em">10,000 "Gen 1" entities are available to mint. The first </tspan>
          <tspan x="30" dy="1.2em">starts at 0.005 ETH and each subsequent one rises</tspan>
          <tspan x="30" dy="1.2em">linearly by 0.005 ETH until the final is 50 ETH. In total if </tspan>
          <tspan x="30" dy="1.2em">all are minted then 250,025 ETH is raised per</tspan>
          <tspan x="30" dy="1.2em">generation. There are a total of 10 Generations, which</tspan>
          <tspan x="30" dy="1.2em">can be minted in parallel via a breeding mechanism. In</tspan>
          <tspan x="30" dy="1.2em">theory, 2.5m ETH could accrue to the central nuke-fund.</tspan>
         </text>
         <image x="334" y="28" href="/images/homephone.png" width="260" height="260"/>
        </svg>
      </div>


      <div className="relative w-full h-full">
        <svg
           viewBox="0 0 600 290"
           preserveAspectRatio="xMidYMid meet"
           className="w-full h-auto"
        >
          <text x="240" y="60" font-family="Electrolize" font-size="30" fill="white" text-anchor="start" alignment-baseline="middle"> FORGING </text>
         <image x="240" y="85" href="/images/boxline.svg" width="200" height="20" />
          <image href="/images/frame2.svg" width="600" height="290" />
          <text x="240" y="140" font-family="Electrolize" font-size="13" fill="white" text-anchor="start" alignment-baseline="middle">
          <tspan x="240" dy="1.2em">When a Merger forges with a Forger, their entropy is</tspan>
          <tspan x="240" dy="1.2em">averaged to produce the next generation entity. The </tspan>
          <tspan x="240" dy="1.2em">crucial parameters are the "Nuke Factor", "Forge</tspan>
          <tspan x="240" dy="1.2em">Potential" and "Performance Factor", which would be</tspan>
          <tspan x="240" dy="1.2em">halfway between the parameters of the parents. If </tspan>
          <tspan x="240" dy="1.2em">Forging runs out, then the next generation is minted</tspan>
          <tspan x="240" dy="1.2em">with the genesis entropy off-by-one.</tspan>
          </text>
          <image x="2" y="28" href="/images/forgephone.png" width="260" height="260"/>
        </svg>
      </div>


      <div className="relative w-full h-full">
        <svg
           viewBox="0 0 600 290"
           preserveAspectRatio="xMidYMid meet"
           className="w-full h-auto"
        >
          <text x="30" y="60" font-family="Electrolize" font-size="30" fill="white" text-anchor="start" alignment-baseline="middle"> TRADING </text>
         <image x="30" y="85" href="/images/tradingline.svg" width="200" height="20" />
          <image href="/images/frame3.svg" width="600" height="290" />
          <text x="30" y="140" font-family="Electrolize" font-size="13" fill="white" text-anchor="start" alignment-baseline="middle">
          <tspan x="30" dy="1.2em">Entities can be traded via the 'Trading' page or traded</tspan>
          <tspan x="30" dy="1.2em">directly through a marketplace like opensea. 10% of the</tspan>
          <tspan x="30" dy="1.2em">Trading fee will be routed to the nuke-fund for extra game</tspan>
          <tspan x="30" dy="1.2em">economy.</tspan>
          </text>
          <image x="332" y="28" href="/images/marketphone.png" width="260" height="260"/>
        </svg>
      </div>


      <div className="relative w-full h-full">
        <svg
           viewBox="0 0 600 290"
           preserveAspectRatio="xMidYMid meet"
           className="w-full h-auto"
        >
          <text x="240" y="60" font-family="Electrolize" font-size="30" fill="white" text-anchor="start" alignment-baseline="middle"> NUKING </text>
         <image x="240" y="85" href="/images/nukeline.svg" width="200" height="20" />
          <image href="/images/frame4.svg" width="600" height="290" />
          <text x="240" y="140" font-family="Electrolize" font-size="13" fill="white" text-anchor="start" alignment-baseline="middle">
          <tspan x="240" dy="1.2em">The Nuke Fund accumulates ETH from new mints and </tspan>
          <tspan x="240" dy="1.2em">economic activity. After a 3-day maturity period, anyone</tspan>
          <tspan x="240" dy="1.2em">can nuke their entity (forever burn) to claim a share of</tspan>
          <tspan x="240" dy="1.2em">the ETH in the Fund. Every entity has a parameter set on</tspan>
          <tspan x="240" dy="1.2em">mint which represents how much of the Fund can be</tspan>
          <tspan x="240" dy="1.2em">claimed on nuke. The maximum total NukeFactor is 50%</tspan>
          <tspan x="240" dy="1.2em">- i.e. a "perfect" nuke.</tspan>
          </text>
          <image x="5" y="28" href="/images/nukeedited.png" width="260" height="260"/>
        </svg>
      </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
