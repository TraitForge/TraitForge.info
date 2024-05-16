import Image from "next/image";
import styles from "./IntroPart.module.scss";

const IntroPart = () => {
  return (
    <section className={styles.container} id="intro">
      <div className="flex flex-col justify-center items-center">
        <h1 className="headers text-4xl mt-4 mb-12 flex justify-center">
          {" "}
          WITH TRAITFORGE, YOU CAN:
        </h1>
        <div className="flex flex-row mr-5 w-8/12 items-start justify-center">
          <div className="flex justify-center items-center px-4 flex-col">
            <Image src="/images/Group1.svg" width={90} height={100} alt="" />
            <div className="text-xl mt-5 text-center">
              Up to 10,000 distinct entities per Generation, each with their own
              unique traits and characteristics.
            </div>
          </div>
          <div className="flex justify-center px-4 items-center flex-col">
            <Image src="/images/Group2.svg" width={90} height={100} alt="" />
            <div className="text-xl mt-5 text-center">
              Explore endless possibilities of strategy through nuking and
              forging.
            </div>
          </div>
          <div className="flex justify-center px-5 items-center flex-col">
            <Image src="/images/Group3.svg" width={90} height={100} alt="" />
            <div className="text-xl mt-5 text-center">
              Connect with a vibrant community of creators and collectors on
              Twitter and Discord.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPart;
