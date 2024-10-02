import Image from "next/image";

export const DescriptionSection = () => {
  return (
    <section className="container relative pb-[140px]">
      <Image src="/images/apocalypse.png" width={1000} height={800} alt="apocalypse image" className="w-full h-full object-cover" />
      <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2">
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
    </section>
  );
};
