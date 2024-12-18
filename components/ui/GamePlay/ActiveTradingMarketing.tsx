import Image from "next/image";

export const ActiveTradingMarketing = () => {
  return (
    <section className="container mt-[100px] ">
      <div className="relative border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md  gap-10 lg:gap-x-[70px]  grid grid-cols-12 lg:w-11/12 xl:w-9/12">
        <div className="col-span-12 md:col-span-5 flex relative max-md:order-2">
          <Image
            src="/images/active.png"
            width={300}
            height={300}
            alt="forge card one"
            className="object-contain max-lg:max-h-[300px] h-full"
          />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center max-md:order-1">
          <h3 className="text-2xl lg:text-[36px] font-race">
            Active Trading and <span className="text-[#0EEB81] ">Market</span>{" "}
            Strategy
          </h3>
          <p className="font-monserat font-base">
            For those captivated by the economic and social dynamics of
            TraitForge, active trading and strategic market influence emerge as
            compelling strategies. .
          </p>

          <p className="mt-5 font-monserat font-base">
            Players in this realm actively engage in buying, selling, and
            trading entities, leveraging market trends and strategically selling
            entities based on these trends
          </p>
        </div>
      </div>
    </section>
  );
};
