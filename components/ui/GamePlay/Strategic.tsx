import Image from "next/image";

export const Strategic = () => {
  return (
    <section className="container mt-[100px] ">
      <div className="relative border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md gap-10 lg:gap-x-[70px] grid grid-cols-12 lg:w-11/12  ">
        <div className="col-span-12 md:col-span-5 flex relative max-lg:order-2">
          <Image
            src="/images/left-mobile.png"
            width={300}
            height={300}
            alt="forge card one"
            className="object-contain h-full max-lg:max-h-[300px]"
          />
          <Image
            src="/images/right-mobile.png"
            width={300}
            height={300}
            alt="forge card one"
            className="object-contain h-full max-lg:max-h-[300px]"
          />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center text-sm lg:text-base max-lg:order-1">
          <h3 className="text-2xl lg:text-[36px] font-race">
            Strategic
            <span className="text-[#FD8D26] "> Long-Term</span> Forging
          </h3>
          <p className="font-monserat font-base">
            This strategy entices players into TraitForge’s depth with a focus
            on selecting entities for forging to optimize traits, performance,
            and nuke values, enhancing lineage value over time. It combines
            patience and strategic planning, requiring entities to mature and
            forging decisions that foresee future generations’ potential.
          </p>
          <p className="mt-5 font-monserat font-base">
            Beyond forging, it involves calculated choices to develop a
            dominating lineage within the game’s ecosystem. Ideal for those
            seeking a challenge and a long-term commitment.
          </p>
        </div>
      </div>
    </section>
  );
};
