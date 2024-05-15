import Image from "next/image";
import styles from "./CommunityPart.module.scss";

const CommunityPart = () => {
  return (
    <section className={styles.container} id="community">
      <div className="flex flex-col justify-center items-center h-full w-screen relative">
        <h1 className="headers text-5xl my-6"> JOIN THE COMMUNITY </h1>
        <div className="text-3xl text-center w-6/12">
          Connect with us on Twitter and Discord to stay updated and engage with
          fellow creators and collectors.
        </div>
        <Image
          className="svg-buttons h-[100px]"
          src="/images/joinnow.svg"
          alt=""
          width="300"
          height="100"
        />
        <Image
          className="overflow-x-hidden mt-10 bottom "
          src="/images/communitybottom.svg"
          alt=""
          width="1290"
          height="40"
        />
      </div>
    </section>
  );
};

export default CommunityPart;
