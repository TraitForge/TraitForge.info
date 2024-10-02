"use client";

import { motion } from "framer-motion";

import styles from "./team.module.scss";

export const TeamHero = () => {
  return (
    <section
      className={`${styles.container} flex  justify-center items-center h-[100vh] w-full`}
    >
      <div className="lg:w-7/12 mx-auto flex flex-col items-center px-20">
        <h2 className="text-[64px] mb-4  font-race text-center h-[200px]">
          TraitForge {' '}
          <span className="from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text">
            team
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center font-monserat text-2xl"
        >
          Sydney, Australia – ThorChain’s renowned developer, JP Thor, will
          officially launch the highly anticipated NFT-based game “TraitForge”
          on Tuesday, October 1, 2024. The game will be driven by community
          participation, where players mint “Entities” and engage in strategic
          gameplay to win real rewards.
        </motion.p>
      </div>
    </section>
  );
};
