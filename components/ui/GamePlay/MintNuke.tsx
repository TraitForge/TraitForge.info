import Image from "next/image";

export const MintAndNuke = () => {
  return (
    <section className="container mt-[100px] ">
      <div className="relative border p-8 bg-gradient-to-tr ml-auto to-light-blue from-light-dark border-light-blue rounded-md  gap-x-[70px]  grid grid-cols-12 w-11/12  ">
        <div className="col-span-7 flex flex-col justify-center">
          <h3 className="text-[36px] font-race">
            <span className="text-primary ">Mint </span>
            and Nuke
          </h3>
          <p className="font-monserat font-base">
            Players who prefer a quicker, more direct approach might opt for the
            "Mint and Nuke" strategy. This involves minting Gen 1 entities(NFTs)
            and waiting for the minimum maturity period before nuking them to
            claim a share of the Nuke Fund.
          </p>
          <p className="mt-5 font-monserat font-base">
            This strategy is akin to a short-term investment, hoping to
            capitalize on the initial investment quickly.
          </p>
        </div>
        <div className="col-span-5 flex">
          <Image
            src="/images/left-mobile.png"
            width={500}
            height={500}
            alt="forge card one"
            className="object-contain w-full h-full"
          />
          <Image
            src="/images/right-mobile.png"
            width={500}
            height={500}
            alt="forge card one"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
