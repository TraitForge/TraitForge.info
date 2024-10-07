import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./WelcomePart.module.scss";
import clsx from "clsx";
import { mediaLinks } from "@/lib/links";

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

  return (
    <section
      className={clsx(styles.container, "justify-center sm:justify-start")}
      id="welcome"
    >
      <div className="items-start w-full justify-center container ">
        <div className="flex flex-col items-start leading-none font-race">
          <h2 data-value="FORGE" className="text-5xl md:text-[90px]">
            FORGE
          </h2>
          <h2 data-value="YOUR" className="text-5xl md:text-[90px]">
            YOUR
          </h2>
          <h2 data-value="DESTINY" className="text-5xl md:text-[90px]">
            DESTINY
          </h2>
        </div>
        <div className="text-lg md:text-[28px] font-monserat flex max-xl:flex-col font-medium mt-10">
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
            className="xl:ml-2"
          >
            Infinite Possibilities!
          </motion.p>
        </div>
        <div className="flex gap-5 absolute bottom-3">
          <Link
            href={"https://traitforge.game/"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 md:px-10 py-2 md:py-6 bg-gradient-to-r max-md:text-[10px] from-[#057977] to-[#0ADFDB] rounded-full font-race"
          >
            Play Now (test-net)
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 md:px-10 py-2 md:py-6 bg-gradient-to-r max-md:text-[10px] from-[#057977] to-[#0ADFDB] border text-transparent bg-clip-text  border-primary rounded-full font-race"
          >
            Discord
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="587"
          height="551"
          fill="none"
          viewBox="0 0 587 551"
          preserveAspectRatio="none"
          className="absolute right-5 md:right-[64px] bottom-5 md:bottom-14 max-md:hidden md:block max-h-[60vh]"
        >
          <path
            stroke="url(#paint0_linear_1555_652)"
            d="M586 0v534c0 8.837-7.163 16-16 16H0"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1555_652"
              x1="477"
              x2="-101.89"
              y1="0"
              y2="427.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#35FFE7"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="374"
          fill="none"
          viewBox="0 0 58 374"
          preserveAspectRatio="none"
          className="absolute right-5 bottom-5 md:bottom-14 max-md:block md:hidden"
        >
          <path
            stroke="url(#paint0_linear_1828_8572)"
            d="M57 0v357c0 8.837-7.163 16-16 16H0"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1828_8572"
              x1="46.398"
              x2="-39.6"
              y1="0"
              y2="9.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#35FFE7"></stop>
            </linearGradient>
          </defs>
        </svg>
        <ul className="flex items-center flex-col gap-4  list-none absolute top-28 md:top-[100px] right-3 md:right-[52px]">
          {mediaLinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-primary bg-opacity-30 rounded-md"
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                passHref
                className="flex justify-center items-center p-1"
              >
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WelcomePart;
