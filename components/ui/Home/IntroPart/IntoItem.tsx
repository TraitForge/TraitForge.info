import { Line } from "@/icons/Line";

interface Props {
  icon: any;
  description: string;
}

export const IntoItem = ({ icon, description }: Props) => {
  return (
    <div className="relative border px-5 py-20 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md flex justify-center items-center flex-col">
      <Line className="absolute px-3 right-0 top-3 w-full" />
      <div className="max-h-[80px]">{icon}</div>
      <p className="text-center mt-12 font-monserat font-semibold text-lg mb-8">
        {description}
      </p>
      <Line className="absolute left-0 right-0 px-3 bottom-3 w-full " />
    </div>
  );
};