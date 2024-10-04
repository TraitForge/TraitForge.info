import { IntoItem } from "../Home/IntroPart/IntoItem";
import { ShareIcon } from "@/icons/ShareIcon";
import { Hammer } from "@/icons/Hammer";
import { Money } from "@/icons/Money";

export const HowItWorks = () => {
  return (
    <section className="relative pb-[150px] md:pb-[250px]">
      <div className="flex flex-col justify-center items-center p-2 z-10">
        <h3 className="text-3xl md:text-5xl mb-24 text-center font-bold font-monserat">
          How It Works
        </h3>
        <div className="grid grid-col-1 md:grid-cols-3 gap-y-5 md:gap-x-[15px] xl:gap-x-[50px] container lg:w-[80%] 2xl:w-[70%] mx-auto">
          <IntoItem
            icon={<ShareIcon />}
            description="Distribute your unique referral code to players."
            title="Share Your Code"
            bodyClasses="text-center text-base font-regular"
          />
          <IntoItem
            icon={<Hammer />}
            description="Players use your code when they mint new entities."
            title="Code Usage"
            bodyClasses="text-center text-base font-regular"
          />
          <IntoItem
            icon={<Money />}
            description="The more players mint using your code, the higher your rewards."
            title="Earn Based on Mints"
            bodyClasses="text-center text-base font-regular"
          />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};
