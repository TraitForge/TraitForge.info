import { IntoItem } from "../Home/IntroPart/IntoItem";

export const HowItWorks = () => {
  return (
    <section id="intro" className="relative pb-[250px]">
      <h3 className="text-[48px] mb-10 text-center font-bold font-monserat">
        Play for the Long Term
      </h3>
      <p className="text-center container font-monserat w-8/12 mx-auto  mb-24">
        <b>Up to 10 Generations:</b> Players can forge up to ten generations of
        entities over several months of gameplay, keeping the game dynamic and
        rewarding for long-term players.
      </p>
      <div className="flex flex-col justify-center items-center p-2 z-10">
        <h3 className="text-[32px] mb-24 text-center font-bold font-monserat">
          How It Works
        </h3>
        <div className="grid grid-cols-3 lg:gap-x-[50px] container lg:w-[80%] 2xl:w-[70%] mx-auto">
          <IntoItem
            description="Players who complete specific tasks on the TraitForge Discord can mint NFTs with ETH starting on xxx-time."
            title="Whitelisted Participants"
            bodyClasses="text-left text-base font-regular"
            titleClasses="!text-left pr-10"
          />
          <IntoItem
            description="Fees will support the in-game Nuke Fund, the central prize pool that grows as the game progresses."
            title="Minting Fee Usage"
            bodyClasses="text-left text-base font-regular"
            titleClasses="!text-left pr-10"
          />
          <IntoItem
            description="Players will compete and collaborate to win portions of this evolving fund."
            title="Prize Pool"
            bodyClasses="text-left text-base font-regular"
            titleClasses="!text-left pr-10"
          />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};
