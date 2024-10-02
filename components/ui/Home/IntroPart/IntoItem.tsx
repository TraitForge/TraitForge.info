import { Line } from "@/icons/Line";

interface Props {
  icon?: any;
  description: string;
  title?: string;
  bodyClasses?: string;
  titleClasses?: string;
}

export const IntoItem = ({ icon, description, title, bodyClasses, titleClasses }: Props) => {
  return (
    <div className="relative border px-5 py-20 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md flex items-center justify-center flex-col">
      <Line className="absolute px-3 right-0 top-3 w-full" />
      {icon && <div className="max-h-[80px]">{icon}</div>}
      <div>
        {title && (
          <h4 className={`font-semibold text-xl font-monserat mt-12 uppercase text-center ${titleClasses ?? ''}`}>
            {title}
          </h4>
        )}
        <p className={`mt-10 font-monserat mb-8 ${bodyClasses}`}>
          {description}
        </p>
      </div>
      <Line className="absolute left-0 right-0 px-3 bottom-3 w-full " />
    </div>
  );
};
