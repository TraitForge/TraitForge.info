import Image from "next/image";

export const MaximizingNukeValue = () => {
  return (
    <section className="container my-[100px]">
      <div className="relative border p-8 bg-gradient-to-tr ml-auto to-light-blue from-light-dark border-light-blue rounded-md  gap-x-[70px]  grid grid-cols-12 w-11/12  ">
        <div className="col-span-7 flex flex-col justify-center">
          <h3 className="text-[36px] font-race">
            Maximizing <span className="text-[#FC62FF] "> Nuke Value </span>{" "}
            Through Aging
          </h3>
          <p className="font-monserat font-base">
            Players who are in it for the long haul might adopt a strategy
            focused on aging their entities to maximize their nuke value. By
            waiting until an entity reaches full maturity, they can nuke it for
            a substantial portion of the Nuke Fund. This strategy requires
            patience and a calculated risk assessment, as holding onto an entity
            for too long could mean missing out on optimal nuke opportunities.
          </p>
          <p className="mt-5 font-monserat font-base">
            It suits players who are less interested in the breeding aspects and
            more in maximizing returns from the nuke mechanism.
          </p>
        </div>
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
      </div>
    </section>
  );
};
