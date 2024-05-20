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
          <Link href="/art">
            <Image
              className="svg-buttons mt-5"
              src="/images/explore.svg"
              alt=""
              width="300"
              height="100"
            />
          </Link>
        </div>
        <Image
          src="/images/artimages.svg"
          width="400"
          height="520"
          alt=""
          className="flex-1 p-2"
        />
      </div>
    </section>
  );
};

export default ArtPart;
