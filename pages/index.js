'use client'

import React, { useEffect } from 'react';
import Playnow from '../screens/playnow'
import Art from '../screens/art';
import TraitforgeIntro from '../screens/TraitforgeIntro';
import Community from '../screens/community';

import { motion } from "framer-motion"

const Home = () => {

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
    <div className=" flex h-full flex-col overflow-x-hidden overflow-y-scroll w-screen">
      <section className="page1" id="index">
        <div className="absolute left-32 items-start justify-center">
        <div
      className="flex flex-col items-start"
    >
      <h2
        data-value="FORGE"
        className="text-7xl mb-5"
      >
        FORGE
      </h2>
      <h2
        data-value="YOUR"
        className="text-7xl mb-5"
      >
        YOUR
      </h2>
      <h2
        data-value="DESTINY"
        className="text-7xl mb-5"
      >
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
      <div className="page2" id="TraitforgeIntro">
      <Playnow/>
      </div>
      <div className="page3" id="Playnow">
      <TraitforgeIntro/>
      </div>
      <div className="page4" id="Art">
      <Art/>
      </div>
      <div className="page5" id="Community">
      <Community/>
      </div>
    </div>
  );
};

export default Home;
