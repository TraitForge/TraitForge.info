import Image from "next/image";

export const DescriptionSection = () => {
  return (
    <section className="container relative mb-[140px] ">
      <div className="z-10 py-28 relative">
        <h4 className="text-[32px] font-race">
          Year 2085: <br /> A Technological Apocalypse
        </h4>
        <p className="font-monserat text-base py-10">
          Set in the year 2085, TraitForge is set in a future where Earth is
          ravaged by a technological catastrophe. Advanced AI, rogue technology,
          and unchecked scientific experiments have spiraled out of control,
          bringing civilization to the brink of collapse.
        </p>
        <h5 className="font-race text-base">Survivors’ Mission</h5>

        <p className="mt-5 font-monserat">
          Players take on the role of survivors, forging new generations of
          entities with valuable traits for survival.
        </p>
      </div>
      <Image
        src="/images/apocalypse.png"
        width={1000}
        height={800}
        alt="apocalypse image"
        className="w-full h-full object-cover absolute top-0 left-0 right-0 z-0 rounded-xl"
      />
    </section>
  );
};
