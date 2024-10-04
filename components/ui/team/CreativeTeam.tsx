import { IntoItem } from "../Home/IntroPart/IntoItem";

import Image from "next/image";

export const CreativeTeam = () => {
  return (
    <section  className="relative pb-[250px]">
      <h3 className="text-3xl md:text-5xl mb-10 text-center font-bold font-monserat">
        ABOUT THE CREATIVE TEAM
      </h3>
      <p className="text-center container font-monserat md:w-8/12 mx-auto mb-10 md:mb-24">
        The TraitForge creative team includes developers JP Thor, OxManPeach,
        and Journey as well as artist xxx
      </p>
      <div className="grid grid-cols-12 md:gap-x-8 container lg:px-20">
        <div className="col-span-12 md:col-span-4 relative flex items-center">
          <Image src={"/images/team.png"} width={600} height={600} alt="jp thor image" />
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-10 py-20">
          <h4 className="from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text text-5xl">
            JP THOR
          </h4>
          <p className="font-monserat">
            JP Thor is one of the most celebrated developers in the crypto
            space, having helped build the $1.2B MC blockchain ThorChain in xxx.{" "}
          </p>
          <p className="font-monserat">
            JP served as a fighter pilot in the Australian Air Force for a
            decade before turning his service-informed discipline and creative
            problem-solving skills to finance and cryptocurrency development in
            xxx.{" "}
          </p>
          <p className="font-monserat">
            His passion for innovation at breakneck speeds is captured in the
            title of his upcoming book, Accelerate or Die, as well as in the
            dynamic gameplay of TraitForge.
          </p>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};
