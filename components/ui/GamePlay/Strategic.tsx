import Image from "next/image";

export const Strategic = () => {
  return (
    <section className="container mt-[100px] ">
      <div className="relative border p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md  gap-x-[70px]  grid grid-cols-12 w-11/12  ">
        <div className="col-span-5 flex">
          <Image
            src="/images/left-mobile.png"
            width={500}
            height={500}
            alt="forge card one"
            className="object-contain w-full h-full"
          />
          <Image
            src="/images/right-mobile.png"
            width={500}
            height={500}
            alt="forge card one"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center">
          <h3 className="text-[36px] font-race">
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