import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { mediaLinks } from "@/lib/links";
import { Button } from "@/components/common/button/button";
import styles from "./WelcomePart.module.scss";
import clsx from "clsx";

const WelcomePart = () => {
  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let intervals: NodeJS.Timeout[] = [];

    const runScrambleAnimation = (h2: HTMLHeadingElement, index: number) => {
      let iteration = 0;
      clearInterval(intervals[index]);

      intervals[index] = setInterval(() => {
        h2.innerText = h2.dataset.value
          ?.split("")
          .map((_, index) => {
            if (index < iteration) {
              return h2.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= h2.dataset.value?.length) {
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

  const linkToGame = () => {
    window.location.href = "https://traitforge.game/";
  };

  return (
    <section
      className={clsx(styles.container, "relative justify-center sm:justify-start")}
      id="welcome"
    >
      <div className="p-32 items-start justify-center">
        <div className="flex flex-col items-start">
          <h2 data-value="FORGE" className="headers text-7xl mb-5">
            FORGE
          </h2>
          <h2 data-value="YOUR" className="headers text-7xl mb-5">
            YOUR
          </h2>
          <h2 data-value="DESTINY" className="headers text-7xl mb-5">
            DESTINY
          </h2>
        </div>

        <div className="text-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mint, Nuke and Forge Your Way to   Infinite Possibilities!
          </motion.p>
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-12 right-32 items-end space-x-4 pt-40">
      <div className="absolute top-0 right-3">
          <ul className="flex flex-col items-center gap-4 text-2xl list-none mt-1">
            {mediaLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row space-x-6">
        <Button
          onClick={linkToGame}
          variant="blue"
          text="PLAY NOW (TEST-NET)"
          textClass="font-racesport rounded-3xl text-base w-[320px]"
        />
        <Button
          onClick={() => window.open("https://discord.gg/NmvFyB4k", "_blank")}
          variant="trans"
          text="DISCORD"
          textClass="font-racesport rounded-3xl text-base w-[240px]"
        />
        </div>
        <div className="pb-[24px]">
      <svg width="587" height="501" viewBox="0 0 587 551" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M586 0V534C586 542.837 578.837 550 570 550H0" stroke="url(#paint0_linear_1555_652)"/>
        <defs>
        <linearGradient id="paint0_linear_1555_652" x1="477" y1="2.2103e-05" x2="-101.89" y2="427.11" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#35FFE7"/>
        </linearGradient>
        </defs>
        </svg>
        </div>
        </div>
    </section>
  );
};

export default WelcomePart;
