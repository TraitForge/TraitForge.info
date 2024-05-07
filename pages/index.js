'use client'

import React, { useEffect } from 'react';
import Playnow from './playnow'
import Art from './art';
import TraitforgeIntro from './TraitforgeIntro';
import Community from './community';

import { motion } from "framer-motion"

const Home = () => {


  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-scroll w-screen">
      <section className="page1" id="index">
        <div className="absolute left-32 items-start justify-center">
        <motion.div
      initial={{
        opacity: 0,
        x: -10,
        y: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="flex flex-col items-start"
    >
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          },
        }}
        className="text-7xl mb-5"
      >
        FORGE
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut",
          },
        }}
        className="text-7xl mb-5"
      >
        YOUR
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.6,
            ease: "easeOut",
          },
        }}
        className="text-7xl mb-5"
      >
        DESTINY
      </motion.h1>
    </motion.div>
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
      <section className="page2" id="TraitforgeIntro">
      <Playnow/>
      </section>
      <section className="page3" id="Playnow">
      <TraitforgeIntro/>
      </section>
      <section className="page4" id="Art">
      <Art/>
      </section>
      <section className="page5" id="Community">
      <Community/>
      </section>
    </div>
  );
};

export default Home;
