import Image from "next/image";

export const Aging = () => {
  return (
    <section className="container w-full lg:w-9/12 flex justify-end mt-[100px]">
      <div className="relative border p-4 lg:p-8 py-[30px] bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md  after:h-[101px] after:w-0.5 after:bg-primary after:-translate-y-full after:absolute after:top-0 after:left-20 lg:w-10/12 before:-translate-y-1/2 xl:gap-x-[70px] before:h-3 before:w-3 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-[75px]   ">
        <h3 className="text-4xl text-white font-race uppercase">Aging</h3>
        <p className="font-monserat mt-8 text-xl">
          Every Entity ages by blocktime from their mint date, at a speed
          proportional to their Performance Factor (determined by entropy).
          Entities with a <b>higher Performance Factor</b> mature much faster, reaching
          full maturity in about <b>30 days</b> when the factor is at its maximum
          (100).
        </p>
      </div>
    </section>
  );
};
