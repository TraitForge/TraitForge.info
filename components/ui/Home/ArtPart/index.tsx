import Image from "next/image";
import styles from "./ArtPart.module.scss";

const ArtPart = () => {
  return (
    <section className={styles.container} id="art">
      <div className="flex flex-col md:flex-row items-center justify-center p-2 gap-1 w-6/12">
      <div className="w-auto h-auto">
        <Image src="/images/Group104.png" alt="img" width="330" height="330" />
        </div>
        <div className="flex pl-6 flex-1 flex-col items-center text-center justify-center">
          <h1 className="headers text-2xl mt-4 mb-6 text-start">
            DISCOVER OUR ART <span className="headers bg-gradient-to-r from-[#057977] to-[#0ADFDB] bg-clip-text text-transparent">Collection</span>
          </h1>
          <div className="text-start">
            {" "}
            Explore our curated art collection and immerse yourself in a <br />{" "}
            world of unique entities crafted by creators like you. <br />
            Whether you're a collector seeking rare finds or an artist looking
            for inspiration, <br /> our collection offers something for
            everyone.{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtPart;
