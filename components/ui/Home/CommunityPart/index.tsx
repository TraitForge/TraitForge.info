import { Button } from "@/components/common/button/button";
import styles from "./CommunityPart.module.scss";

const CommunityPart = () => {
  return (
    <section className={styles.container} id="community">
      <div className="flex flex-col justify-center items-start h-full w-10/12 relative p-2 pt-10">
        <h1 className="headers text-3xl my-6 text-start">
          {" "}
          JOIN THE COMMUNITY{" "}
        </h1>
        <div className="text-xl text-start w-full md:w-6/12 pb-5">
          Connect with us on Twitter and Discord <br/>to stay updated and engage with<br/>
          fellow creators and collectors.
        </div>
        <Button
          onClick={() => window.open("https://discord.gg/NmvFyB4k", "_blank")}
          variant="blue"
          text="JOIN NOW!"
          textClass="font-racesport rounded-[50px] text-sm w-[200px]"
        />
      </div>
    </section>
  );
};

export default CommunityPart;
