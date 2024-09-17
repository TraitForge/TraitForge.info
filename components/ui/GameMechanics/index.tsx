"use client";

import Image from "next/image";
import classNames from "classnames";
import styles from "./GameMechanics.module.scss";
import React, { useEffect } from "react";
import { Button } from "@/components/common/button/button";

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

  const textClasses = classNames(
    'text-white font-bebas hover:translate-y-[-2px] transition-all ease-in font-electrolize rounded-[35px] pr-[30px] text-xl md:text-[16px] whitespace-nowrap leading-none bg-[#0ADFDB] bg-opacity-0 border border-[#00FFFF] bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent flex flex-row items-center justify-start gap-3 font-monsterrat'
  );

  const frameClasses = classNames(
    'text-white font-bebas font-monsterrat rounded-[15px] pr-[30px] text-xl md:text-[16px] whitespace-nowrap bg-gradient-to-t from-[#057977]/5 to-[#0ADFDB]/20 flex flex-row items-center justify-start gap-3 font-monsterrat p-5'
  );

  return (
    <div
      className={`${styles.container} h-full w-screen flex mb-36 flex-col items-center p-2`}
    >
      <h6 className="headers bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent text-5xl mb-5 mt-36 text-center" data-value="HOW IT WORKS">
        HOW IT WORKS
      </h6>
      <p className="text-center text-lg">
       We use a process called token entropy to ensure 
       <br/> each entity generated is completely unique.
       This <br/> process involves several steps:
      </p>
      <div
        className={`${styles.end} mt-20 w-screen items-center justify-center p-4`}
      >
        <div className="flex mb-16 flex-col md:flex-row items-center justify-center gap-6">
          <Image src="/images/entropy1.svg" alt="" width="400" height="300" />
          <div className="flex flex-col gap-4">
            <h1 className={textClasses}>
            <svg width="57" height="42" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="31.1284" cy="31" r="31" fill="url(#paint0_linear_1570_12216)"/>            <path d="M35.9106 23.61C36.0506 24.11 36.0606 24.63 35.9406 25.17L32.5806 42H26.2806L29.5206 25.89H26.2206L27.2106 21H32.5206C33.0806 21 33.5906 21.12 34.0506 21.36C34.5306 21.58 34.9206 21.89 35.2206 22.29C35.5406 22.67 35.7706 23.11 35.9106 23.61Z" fill="white"/>
                <defs>
               <linearGradient id="paint0_linear_1570_12216" x1="-5.15567" y1="31" x2="98.8389" y2="24.4737" gradientUnits="userSpaceOnUse">
               <stop stop-color="#308590"/>
               <stop offset="1" stop-color="#35FFE7" stop-opacity="0.96"/>
               </linearGradient>
               </defs>
            </svg>
            ENTROPY GENERATION
            </h1>
            <h1 className={textClasses}>
            <svg width="57" height="42" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="31.1284" cy="31" r="31" fill="url(#paint0_linear_1570_12223)"/>
                <path d="M27.0958 28.71H34.1758L34.5358 26.82C34.5758 26.58 34.5158 26.37 34.3558 26.19C34.2158 25.99 34.0258 25.89 33.7858 25.89H23.9758L24.9658 21H37.7458C38.2858 21 38.7858 21.12 39.2458 21.36C39.7258 21.58 40.1258 21.89 40.4458 22.29C40.7658 22.67 40.9958 23.11 41.1358 23.61C41.2758 24.11 41.2858 24.63 41.1658 25.17L39.5458 32.91H29.7058C29.5458 32.91 29.3958 32.96 29.2558 33.06C29.1358 33.16 29.0558 33.29 29.0158 33.45L28.2958 37.11H39.5458L38.5858 42H21.0058L22.9858 32.1C23.0858 31.6 23.2558 31.15 23.4958 30.75C23.7558 30.33 24.0658 29.97 24.4258 29.67C24.7858 29.37 25.1958 29.14 25.6558 28.98C26.1158 28.8 26.5958 28.71 27.0958 28.71Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_1570_12223" x1="-5.15567" y1="31" x2="98.8389" y2="24.4737" gradientUnits="userSpaceOnUse">
                <stop stop-color="#308590"/>
                <stop offset="1" stop-color="#35FFE7" stop-opacity="0.96"/>
                </linearGradient>
                </defs>
                </svg>
            ENTROPY INDEXING
            </h1>
            <h1 className={textClasses}>
            <svg width="57" height="42" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="31.1284" cy="31" r="31" fill="url(#paint0_linear_1570_12229)"/>
                <path d="M33.4062 28.71C33.5662 28.71 33.7062 28.66 33.8262 28.56C33.9662 28.44 34.0562 28.3 34.0962 28.14L34.3662 26.73C34.4062 26.51 34.3562 26.32 34.2162 26.16C34.0762 25.98 33.8962 25.89 33.6762 25.89H23.6562L24.6462 21H37.5462C38.1062 21 38.6162 21.12 39.0762 21.36C39.5562 21.58 39.9462 21.89 40.2462 22.29C40.5662 22.67 40.7962 23.11 40.9362 23.61C41.0762 24.11 41.0962 24.63 40.9962 25.17L40.3062 28.56C40.1862 29.2 39.8662 29.74 39.3462 30.18C38.8262 30.6 38.2362 30.81 37.5762 30.81H38.0262C38.4662 30.81 38.8662 30.91 39.2262 31.11C39.6062 31.29 39.9262 31.54 40.1862 31.86C40.4462 32.16 40.6262 32.51 40.7262 32.91C40.8462 33.31 40.8562 33.72 40.7562 34.14L39.7362 39.18C39.5762 40.02 39.1762 40.7 38.5362 41.22C37.8962 41.74 37.1562 42 36.3162 42H21.1962L22.1862 37.11H33.2862C33.4462 37.11 33.5862 37.06 33.7062 36.96C33.8462 36.84 33.9362 36.7 33.9762 36.54L34.5462 33.75C34.5862 33.53 34.5362 33.34 34.3962 33.18C34.2562 33 34.0762 32.91 33.8562 32.91H24.0462L24.8862 28.71H33.4062Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_1570_12229" x1="-5.15567" y1="31" x2="98.8389" y2="24.4737" gradientUnits="userSpaceOnUse">
                <stop stop-color="#308590"/>
                <stop offset="1" stop-color="#35FFE7" stop-opacity="0.96"/>
                </linearGradient>
                </defs>
                </svg>
            IMMUTABLE SLOTS
            </h1>
            <h1 className={textClasses}>
            <svg width="57" height="42" viewBox="0 0 86 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="31.1284" cy="31" r="31" fill="url(#paint0_linear_1570_12235)"/>
                <path d="M28.8525 21L27.4725 27.87C27.4325 28.09 27.4825 28.29 27.6225 28.47C27.7625 28.63 27.9425 28.71 28.1625 28.71H32.9025C33.0625 28.71 33.2025 28.66 33.3225 28.56C33.4625 28.44 33.5525 28.3 33.5925 28.14L35.0025 21H41.3025L37.1025 42H30.8025L32.6325 32.91H24.4425C23.3225 32.91 22.4225 32.48 21.7425 31.62C21.2625 31.02 21.0025 30.53 20.9625 30.15C20.9425 29.75 20.9325 29.47 20.9325 29.31C20.9325 29.29 20.9525 29.16 20.9925 28.92C21.0525 28.66 21.1225 28.34 21.2025 27.96C21.2825 27.56 21.3625 27.11 21.4425 26.61C21.5425 26.11 21.6425 25.6 21.7425 25.08C21.9825 23.88 22.2525 22.52 22.5525 21H28.8525Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_1570_12235" x1="-5.15567" y1="31" x2="98.8389" y2="24.4737" gradientUnits="userSpaceOnUse">
                <stop stop-color="#308590"/>
                <stop offset="1" stop-color="#35FFE7" stop-opacity="0.96"/>
                </linearGradient>
                </defs>
                </svg>
            ENTITY PARAMETERS DERIVATION
            </h1>
          </div>
        </div>


        <div className="flex mb-16 flex-col items-center justify-center gap-6">
          <div className="flex w-6/12 font-monsterrat justify-center flex-col text-center pb-10">
            <h1 className="text-5xl">Traits</h1>
            <p>Each TraitForge entity is provided with a set of parameters (Traits) which represent the functional value of the entity through its access to "Nuke Fund" and other gameplay mechanics.</p>
          </div>

          <div className={frameClasses}>
          <Image src="/images/nuke.svg" alt="Nuke" width={150} height={150} />
          <div>
          <h1 className="text-2xl font-racesport">Nuke Factor</h1>
            <p className="leading-loose pb-3">Nuke Factor represents an entity's stake in the Nuke Fund. Upon<br/> minting, an entity receives a Nuke Factor ranging from 1-25%,<br/> determined by its inherent entropy. Through engaging game-play<br/> elements this percentage can be elevated up to a maximum of 50%. </p>
            <li className="pb-2">upon minting 1-25% NukeFactor</li>
            <li>maximum of 50% NukeFactor</li>
            </div>
          </div>

          <div className={frameClasses}>
          <div>
            <h1 className="text-2xl font-racesport">performance Factor</h1>
            <p className="leading-loose">Performance Factor is a numerical value (0-9) that adjusts how the<br/> "age" of an entity is calculated. This factor is used to modify the<br/> standard calculation of time elapsed since the entities creation to<br/> reflect additional characteristics or behaviors encoded into the entity<br/> itself, in this case increasing the rate which the Nuke Factor matures.</p>
            </div>
            <Image src="/images/perfactor.svg" alt="Nuke" width={150} height={150} />
          </div>

          <div className={frameClasses}>
          <Image src="/images/rolefix.svg" alt="Nuke" width={150} height={150} />
          <div>
          <h1 className="text-2xl font-racesport">role</h1>
            <p className="leading-loose">TraitForge has two roles which act as key game-play features for<br/> forging. The two roles (forger/merger) provide the game with the<br/> unique ability for entities to forge with each-other to create offspring<br/> entities. These offspring entities carry the averaged traits of it's<br/> parents. Entities generated in the initial mint are split 1/3 forgers and<br/> 2/3 mergers.</p>
            </div>
          </div>

          <div className={frameClasses}>
          <div>
          <h1 className="text-2xl font-racesport">forge potential</h1>
            <p className="leading-loose pb-2">Forge Potential is the trait responsible for an entity's ability to forge<br/>and create new entities with players.Once an entity has used all of it’s<br/> “Forge Potential” it will lose the ability to list for forging or forge with<br/> an already listed entity. Reaching forging limits will not burn your<br/> entity.</p>
           <p className="leading-loose">After 1 year has passed an entity's forge potential will reset to its initial<br/> value at mint.</p> 
          </div>
            <Image src="/images/forgetential.svg" alt="Nuke" width={150} height={150} />
          </div>

          <div className={frameClasses}>
          <Image src="/images/airdropallo.svg" alt="Nuke" width={150} height={150} />
          <div>
          <h1 className="text-2xl font-racesport">airdrop allocation</h1>
            <p className="leading-loose">The allocation of tokens during an airdrop is based on the entropy of<br/> the entities you minted or forged. Higher entropy entities [e.g., 916783,<br/> 897551, 989879] receive more tokens compared to lower entropy<br/> entities [e.g., 147835, 527253, 145773].</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMechanics;
