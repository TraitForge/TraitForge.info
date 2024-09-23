import { NftCardOne } from "@/icons/NftCardOne";
import { NftCardTwo } from "@/icons/NftCardTwo";
import { NftCardThree } from "@/icons/NftCardThree";

const ArtPart = () => {
  return (
    <section className="container md:w-[70%] py-[250px]" id="art">
      <div className="grid grid-cols-2">
        <div className="relative h-[500px]">
          <NftCardOne  className="absolute right-[15%] top-[40%] " />
          <NftCardTwo className="absolute left-0 top-1/2 -translate-y-1/2" />
          <NftCardThree className="absolute left-1/2 -translate-x-1/2 top-10 -translate-y-10"/>
        </div> 
        <div className="flex flex-1 flex-col items-center text-center justify-center font-monserat w-8/12">
          <h3 className="text-[48px] mb-8 text-left font-bold leading-none">
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
    </section>
  );
};

export default ArtPart;
