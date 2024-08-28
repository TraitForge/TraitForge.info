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
          WELCOME TO TRAITFORGE!{" "}
        </h1>
        <div className="text-2xl w-full sm:w-6/12 text-center">
          Unleash your creativity and dive into a realm where you can mint,
          nuke, and forge unique entities from an expansive collection of
          possibilities.
        </div>
        <svg
         width="300"
         height="150"
         className={styles.button}
         onClick={linkToGame}
         >
      <image href="/images/playnow.svg" width="300" height="150" />
      <text x="150" y="80" font-family="Electrolize" font-size="20" fill="white" text-anchor="middle" alignment-baseline="middle">
        Play Now (test-net)
      </text>
    </svg>
      </div>
    </section>
  );
};

export default PlayNowPart;
