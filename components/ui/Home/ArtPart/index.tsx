import Image from "next/image";
import styles from "./ArtPart.module.scss";
import Link from "next/link";

const ArtPart = () => {
  return (
    <section className={styles.container} id="art">
      <div className="flex flex-col md:flex-row items-center justify-center p-2 gap-4">
        <div className="flex flex-1 flex-col items-center text-center justify-center">
          <h1 className="headers text-4xl mt-4 mb-6 text-center">
            DISCOVER THE ART COLLECTION
          </h1>
          <div className="w-10/12 mx-auto justify-center content-center">
            {" "}
            Explore our curated art collection and immerse yourself in a <br />{" "}
            world of unique entities crafted by creators like you. <br />
            Whether you're a collector seeking rare finds or an artist looking
            for inspiration, <br /> our collection offers something for
            everyone.{" "}
          </div>
        </div>
        <div className="w-7/12 h-auto">
      <svg
        viewBox="0 0 500 520"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        <image href="/images/artimages.svg" width="500" height="520" />
        <image href="/images/entity1.jpeg" x="14" y="96" width="328" height="328" />
        <image href="/images/entity2.jpeg" x="319" y="97" width="174" height="164" />
        <image href="/images/entity3.jpeg" x="318" y="260" width="174" height="164" />
      </svg>
    </div>
      </div>
    </section>
  );
};

export default ArtPart;
