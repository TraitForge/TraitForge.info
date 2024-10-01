import { NukeFactorIcon } from "@/icons/NukeFactor";

export const NukeFactor = () => {
  return (
    <div className="h-[350px] p-7 flex gap-x-[77px] items-center border bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md">
      <div>
        <NukeFactorIcon />
      </div>
      <div>
        <h3 className="text-race text-4xl mb-10">nuke factor</h3>
        <p className="font-monserat">
          Nuke Factor represents an entity's stake in the Nuke Fund. Upon
          minting, an entity receives a Nuke Factor ranging from 1-25%,
          determined by its inherent entropy. Through engaging game-play
          elements this percentage can be elevated up to a maximum of 50%.  Upon
          minting 1-25% Nuke Factor  Maximum of 50% nuke Factor 
        </p>
        <ul className="ml-5 font-monserat mt-5">
          <li className="list-disc">Upon minting 1-25% Nuke Factor </li>
          <li className="list-disc">Maximum of 50% nuke Factor </li>
        </ul>
      </div>
    </div>
  );
};
