import { RoleIcon } from "@/icons/RoleIcon";

export const Role = () => {
  return (
    <div className="lg:h-[350px] p-7 flex max-lg:flex-col max-lg:gap-y-5 gap-x-[77px] items-center border bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md">
      <div className="max-lg:order-2">
        <RoleIcon />
      </div>
      <div className="max-lg:order-1">
        <h3 className="text-race text-2xl md:text-4xl mb-10">role</h3>
        <p className="font-monserat">
          TraitForge has two roles that serve as key gameplay features for
          forging. The two roles (forger/merger) give the game the unique
          ability for entities to forge with each other to create offspring
          entities. These offspring entities carry the averaged traits of their
          parents. Entities generated in the initial mint are split into 1/3
          forgers and 2/3 mergers.
        </p>
      </div>
    </div>
  );
};
