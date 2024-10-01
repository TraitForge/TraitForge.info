import { NukeFactor } from "./NukeFactor";
import { PerformanceFactor } from "./PerformaceFactor";
import { Role } from "./Role";

export const Traits = () => {
  return (
    <section className="containt lg:w-8/12 mx-auto  mb-20">
      <div className="py-[200px]">
        <h3 className="text-center mb-10 text-5xl font-monserat font-bold">
          Traits
        </h3>
        <p className="text-[24px] text-center font-monserat">
          Each TraitForge entity is provided with a set of parameters (Traits) 
          which represent the functional value of the entity through its access
          to "Nuke Fund" and other gameplay mechanics.
        </p>
      </div>
      <div className="flex flex-col gap-y-12">
        <NukeFactor />
        <PerformanceFactor />
        <Role />
      </div>
    </section>
  );
};
