import { PerformanceFacorIcon } from "@/icons/PerformanceFacorIcon";

export const PerformanceFactor = () => {
  return (
    <div className="h-[350px] p-7 flex gap-x-[77px] items-center border bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md">
      <div>
        <h3 className="text-race text-4xl mb-10">performance factor</h3>
        <p className="font-monserat">
          The Performance Factor is a number between 0 and 9 that adjusts how an
          entity's "age" is calculated. It modifies the standard time since the
          entity's creation to account for specific traits or behaviors, in this
          case speeding up how quickly the Nuke Factor matures.
        </p>
      </div>
      <div>
        <PerformanceFacorIcon />
      </div>
    </div>
  );
};
