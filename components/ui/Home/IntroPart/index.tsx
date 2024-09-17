import Image from "next/image";
import { Card } from "@/components/common/card/Card";
import styles from "./IntroPart.module.scss";

const IntroPart = () => {
  return (
    <section className={styles.container} id="intro">
      <div className="flex flex-col justify-center items-center p-2">
        <h1 className="headers text-4xl mt-4 mb-12 text-center">
          WITH <span className="headers bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent">TRAITFORGE</span>, YOU CAN:
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-8/12 items-start justify-center">
          <div className="flex justify-center items-center px-4 flex-col">
            <Card
             text=" Up to 10,000 distinct entities per Generation, each with their own
              unique traits and characteristics."
             svg="/images/Group1.svg"
             />
          </div>
          <div className="flex justify-center px-4 items-center flex-col">
            <Card
             text="Explore endless possibilities in the evolution of your creations through nuking and forging."
             svg="/images/Group2.svg"
             />
          </div>
          <div className="flex justify-center px-5 items-center flex-col">
            <Card
             text="Connect with a vibrant community of creators and collectors on
              Twitter and Discord."
             svg="/images/Group3.svg"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPart;
