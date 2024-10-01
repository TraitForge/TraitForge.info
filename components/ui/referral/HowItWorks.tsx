import { IntoItem } from "../Home/IntroPart/IntoItem";
import { ShareIcon } from "@/icons/ShareIcon";
import { Hammer } from "@/icons/Hammer";
import { Money } from "@/icons/Money";

export const HowItWorks = () => {
  return (
    <section id="intro" className="relative pb-[250px]">
      <div className="flex flex-col justify-center items-center p-2 z-10">
        <h3 className="text-[48px] mb-24 text-center font-bold font-monserat">
          How It Works
        </h3>
        <div className="grid grid-cols-3 lg:gap-x-[50px] container lg:w-[80%] 2xl:w-[70%] mx-auto">
          <IntoItem
            icon={<ShareIcon />}
            description="Distribute your unique referral code to players."
            title="Share Your Code"
          />
          <IntoItem
            icon={<Hammer />}
            description="Players use your code when they mint new entities."
            title="Code Usage"
          />
          <IntoItem
            icon={<Money />}
            description="The more players mint using your code, the higher your rewards."
            title="Earn Based on Mints"
          />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};
