import styles from "./PlayNowPart.module.scss";

const PlayNowPart = () => {
  return (
    <section className={styles.container} id="playnow">
      <div className="flex flex-col justify-center items-center w-screen p-2 font-monserat relative">
        <h3 className="text-[48px] mb-8 text-center font-bold">
          Welcome to{" "}
          <span className="from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text">
            TraitForge!
          </span>
        </h3>
        <div className="text-2xl w-full sm:w-6/12 text-center ">
          Unleash your creativity and dive into a realm where you can mint,
          nuke, and forge unique entities from an expansive collection of
          possibilities.
        </div>
        <div className="bg-[radial-gradient(ellipse_at_center,_rgba(33,102,226,.2)_0%,_rgba(33,102,226,0)_70%)] absolute top-0 -translate-x-1/4 -translate-y-1/4 left-0 w-[500px] h-[500px] z-0"></div>
      </div>
    </section>
  );
};

export default PlayNowPart;
