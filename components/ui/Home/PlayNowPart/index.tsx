import Image from "next/image";
import styles from "./PlayNowPart.module.scss";

const PlayNowPart = () => {
  const linkToGame = () => {
    window.location.href = "https://traitforge.game/";
  };

  return (
    <section className={styles.container} id="playnow">
      <div className="flex flex-col justify-center items-center w-screen p-2">
        <h1 className="headers text-4xl mt-4 mb-8 text-center">
          {" "}
          WELCOME TO <span className="headers bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent">TRAITFORGE!</span>
          {" "}
        </h1>
        <div className="text-2xl w-full sm:w-6/12 text-center">
          Unleash your creativity and dive into a realm where you can mint,
          nuke, and forge unique entities from an expansive collection of
          possibilities.
        </div>
      </div>
    </section>
  );
};

export default PlayNowPart;
