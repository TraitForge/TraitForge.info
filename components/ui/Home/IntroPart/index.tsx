import { IntoItem } from "./IntoItem";

import { Nft } from "@/icons/Nft";
import { Mint } from "@/icons/Mint";
import { Connection } from "@/icons/Connection";

const IntroPart = () => {
  return (
    <section id="intro" className="relative pb-[250px]">
      <div className="flex flex-col justify-center items-center p-2 z-10">
        <h3 className="text-[48px] mb-24 text-center font-bold font-monserat">
          With to{" "}
          <span className="from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text">
            TraitForge
          </span>{" "}
          you can
        </h3>
        <div className="grid grid-cols-3 lg:gap-x-[50px] container lg:w-[80%] 2xl:w-[70%] mx-auto">
          <IntoItem
            icon={<Nft />}
            description="Mint up to 100,000 distinct entities, each with its own unique traits and characteristics."
          />
          <IntoItem
            icon={<Mint />}
            description="Explore endless possibilities in the evolution of your creations through nuking and forging."
          />
          <IntoItem
            icon={<Connection />}
            description="Connect with a vibrant community of creators and collectors on Twitter and Discord. "
          />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};

export default IntroPart;
