import styles from "./CommunityPart.module.scss";
import Link from "next/link";

const CommunityPart = () => {
  return (
    <section className={styles.container} id="community">
      <div className="container md:w-[70%] mx-auto font-monserat flex flex-col h-full justify-center flex-1 items-start">
        <h3 className="text-4xl text-left font-bold">
          {" "}
          JOIN THE COMMUNITY{" "}
        </h3>
        <p className="text-xl text-left w-full py-10 md:w-4/12">
          Connect with us on Twitter and Discord to stay updated and engage with
          fellow creators and collectors.
        </p>
        <Link
          href={"/"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-20 py-6 bg-gradient-to-r from-[#057977] to-[#0ADFDB] rounded-full font-race"
        >
          JOIN NOW
        </Link>
      </div>
    </section>
  );
};

export default CommunityPart;
