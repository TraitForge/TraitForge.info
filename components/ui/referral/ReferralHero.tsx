"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./referral.module.scss";

export const ReferralHero = () => {
  return (
    <section
      className={`${styles.container} flex  justify-center items-center h-[100vh] w-full`}
    >
      <div className="lg:w-7/12 mx-auto flex flex-col items-center px-10">
        <h2 className="text-[64px] mb-4  font-race text-center h-[200px]">
          Forge Allies,{" "}
          <span className="from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text">
            Earn Rewards
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center font-monserat text-2xl px-10"
        >
          Join the TraitForge Referral Program and earn both short-term and
          long-term rewards by sharing your unique referral code with players.
        </motion.p>
        <Link
          href={"/"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-6 bg-gradient-to-r from-[#057977] to-[#0ADFDB] mt-12 rounded-full font-race inline-block text-center"
        >
          Apply now
        </Link>
      </div>
    </section>
  );
};
