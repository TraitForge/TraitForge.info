import { NftCardOne } from "@/icons/NftCardOne";
import { NftCardTwo } from "@/icons/NftCardTwo";
import { NftCardThree } from "@/icons/NftCardThree";

const ArtPart = () => {
  return (
    <section className="pb-[150px] md:pb-[250px] relative" id="art">
      <div className="grid grid-cols-1 lg:grid-cols-2 container md:w-[70%] max-md:gap-y-28">
        <div className="relative h-[500px]">
          <NftCardOne  className="absolute right-[15%] top-[40%] " />
          <NftCardTwo className="absolute left-0 top-1/2 -translate-y-1/2" />
          <NftCardThree className="absolute left-1/2 -translate-x-1/2 top-10 -translate-y-10"/>
        </div> 
        <div className="flex flex-1 flex-col items-center text-center justify-center font-monserat w-full md:w-8/12">
          <h3 className="text-3xl md:text-5xl mb-8 text-left font-bold leading-none">
            Discover Our Art{" "}
            <span className="from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text">
              Collection
            </span>
          </h3>
          <div className="font-monserat text-left ">
            Explore our curated art collection and immerse yourself in a world
            of unique entities crafted by creators like you. Whether you're a
            collector seeking rare finds or an artist looking for inspiration,
            our collection offers something for everyone.
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(33,102,226,0)_70%)] absolute bottom-0 left-0 -translate-x-1/4 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};

export default ArtPart;
