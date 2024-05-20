"use client";

import Image from "next/image";
import styles from "./GameMechanics.module.scss";
import React, { useEffect } from "react";

const GameMechanics = () => {
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
      className={`${styles.container} h-full w-screen flex mb-36 flex-col items-center p-2`}
    >
      <h2 className="text-4xl mb-5 mt-32 text-center" data-value="ENTROPY">
        ENTROPY
      </h2>
      <p className="text-center text-m">
        TraitForge uses a process called token entropy to ensure each entity
        generated is completely unique. This process involves several steps:
      </p>
      <div
        className={`${styles.end} mt-20 w-screen items-center justify-center p-4`}
      >
        <div className="flex mb-16 flex-col md:flex-row items-center justify-center gap-6">
          <Image src="/images/entropy1.svg" alt="" width="100" height="100" />
          <Image
            src="/images/entropycontainer1.svg"
            alt=""
            width="600"
            height="190"
            className="w-full md:w-auto"
          />
        </div>

        <div className="flex mb-16 flex-col md:flex-row items-center justify-center gap-6">
          <Image src="/images/entropy2.svg" alt="" width="100" height="100" />
          <Image
            src="/images/entropycontainer2.svg"
            alt=""
            width="600"
            height="180"
            className="w-full md:w-auto"
          />
        </div>

        <div className="flex mb-16 flex-col md:flex-row items-center justify-center gap-6">
          <Image src="/images/entropy3.svg" alt="" width="100" height="100" />
          <Image
            src="/images/entropycontainer3.svg"
            alt=""
            width="600"
            height="160"
            className="w-full md:w-auto"
          />
        </div>

        <div className="flex mb-16 flex-col md:flex-row items-center justify-center gap-6">
          <Image src="/images/entropy4.svg" alt="" width="100" height="100" />
          <Image
            src="/images/entropycontainer4.svg"
            alt=""
            width="600"
            height="160"
            className="w-full md:w-auto"
          />
        </div>
      </div>

      <div className={`${styles.start} w-screen flex justify-center p-4`}>
        <div className="w-full md:w-8/12 mt-10 flex flex-col justify-center gap-20 items-center sm:items-stretch">
          <div className="flex content-center justify-start">
            <Image
              src="/images/initialNukeFactor.svg"
              alt=""
              width="300"
              height="235"
            />
          </div>

          <div className="flex content-center justify-end">
            <Image
              src="/images/performanceFactor.svg"
              alt=""
              width="300"
              height="230"
            />
          </div>

          <div className="flex content-center justify-start">
            <Image src="/images/role.svg" alt="" width="300" height="225" />
          </div>

          <div className="flex content-center justify-end">
            <Image
              src="/images/forgePotential.svg"
              alt=""
              width="300"
              height="235"
            />
          </div>

          <div className="flex content-center justify-start">
            <Image
              src="/images/airdropAllocation.svg"
              alt=""
              width="300"
              height="235"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMechanics;
