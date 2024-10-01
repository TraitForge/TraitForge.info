import { ForgePotentialIcon } from "@/icons/ForgePotentialIcon";

export const ForgePotential = () => {
  return (
    <div className="h-[350px] p-7 flex gap-x-[77px] items-center border bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md">
      <div>
        <h3 className="text-race text-4xl mb-10">Forge Potential</h3>
        <p className="font-monserat">
          Forge Potential is the trait responsible for an entity's ability to
          forge and create new entities with players. Once an entity has used
          all of its “Forge Potential,” it will lose the ability to list for
          forging or forge with an already listed entity. Reaching forging
          limits will not burn your entity. After 1 year has passed, an entity's
          forge potential will reset to its initial value at mint.
        </p>
        <ul className="ml-5 font-monserat mt-5">
          <li className="list-disc">Upon minting 1-25% Nuke Factor </li>
          <li className="list-disc">Maximum of 50% nuke Factor </li>
        </ul>
      </div>
      <div>
        <ForgePotentialIcon />
      </div>
    </div>
  );
};
