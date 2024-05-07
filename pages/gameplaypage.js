import React from 'react';
import styles from '../styles/gameplay.module.scss';

import { motion } from "framer-motion"

const GameplayPage = () => {
  return (
    <div className={`${styles.page} h-full w-screen flex flex-col items-center mb-20`}>
      <div className=" mt-32 flex flex-col items-center">
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
        className="text-5xl mb-4"
      >
      GAMEPLAY
      </motion.h1>
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
