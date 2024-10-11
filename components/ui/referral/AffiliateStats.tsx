import { combinedData } from "@/lib/affiliates";

export const AffiliateStats = () => {

  const sortedData = combinedData.sort((a, b) => b.count - a.count);

  return (
    <section className="relative pb-[150px] md:pb-[250px]">
      <div className="flex flex-col justify-center items-center p-2 z-10 ">
        <h3 className="text-3xl md:text-5xl mb-24 text-center font-bold font-monserat">
          Affiliate Leaderboard:
        </h3>
        <div className="gap-y-5 md:gap-x-[50px] container mx-auto">
          <div className="relative border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md grid grid-cols-12">
            <div className="col-start-2 col-span-10 rounded-lg shadow-lg p-4">
              <div className="max-h-[400px] overflow-y-scroll overflow-x-hidden rounded-lg">
                <ul className="space-y-1 md:space-y-3">
                  {sortedData.map((player, index) => (
                    <li key={index} className="flex justify-between p-2 px-8 flex-col md:flex-row rounded-lg text-xs md:text-base text-white bg-gradient-to-tr to-light-blue from-light-dark border-light-blue">
                      <span>@{player.name}</span>
                      <span>{player.count} pts</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs font-bold text-center text-white pt-4">updated weekly</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};
