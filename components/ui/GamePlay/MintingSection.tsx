import { NftCardTwo } from "@/icons/NftCardTwo";

export const MintingSection = () => {
  return (
    <section className="container w-full lg:w-9/12 mx-auto">
      <div className="relative border p-4 lg:p-8  bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md after:translate-y-full xl:gap-x-[70px] after:h-[101px] after:w-0.5 after:bg-primary after:absolute after:bottom-0 after:left-20 grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 relative py-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="40"
            fill="none"
            viewBox="0 0 677 40"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 w-full top-9"
          >
            <path
              fill="url(#paint0_linear_1561_6796)"
              d="M1 .25H.25v1.5H1V.25zM270.254 1l.284-.694-.136-.056h-.148V1zm92.807 38l-.284.694.136.056h.148V39zM1 1.75h269.254V.25H1v1.5zm268.97-.056l92.807 38 .568-1.388-92.807-38-.568 1.388zm93.091 38.056H677v-1.5H363.061v1.5z"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1561_6796"
                x1="-117.294"
                x2="462.771"
                y1="-41.883"
                y2="359.955"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0ADFDB"></stop>
                <stop offset="1" stopColor="#14494C"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h3 className="text-4xl text-white font-race">MINTING</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="285"
            height="20"
            fill="none"
            viewBox="0 0 285 20"
            className="my-[30px]"
          >
            <path
              fill="#35FFE7"
              fillOpacity="0.96"
              d="M274.174 0H9.929C4.455 0 0 4.453 0 9.929c0 5.473 4.455 9.928 9.929 9.928h264.245c5.474 0 9.929-4.453 9.929-9.928 0-5.476-4.455-9.929-9.929-9.929zm0 18.33H9.929a8.401 8.401 0 010-16.802h264.245a8.402 8.402 0 010 16.801z"
            ></path>
            <path
              fill="#35FFE7"
              fillOpacity="0.96"
              d="M9.98 16.91a6.96 6.96 0 100-13.92 6.96 6.96 0 000 13.92zM25.196 16.91a6.96 6.96 0 100-13.92 6.96 6.96 0 000 13.92zM40.41 16.913a6.963 6.963 0 100-13.926 6.963 6.963 0 000 13.926zM55.625 16.913a6.963 6.963 0 100-13.926 6.963 6.963 0 000 13.926zM70.84 16.913a6.963 6.963 0 100-13.926 6.963 6.963 0 000 13.926zM86.055 16.91a6.96 6.96 0 100-13.92 6.96 6.96 0 000 13.92zM101.269 16.91a6.961 6.961 0 100-13.922 6.961 6.961 0 000 13.923zM109.522 9.95a6.963 6.963 0 0113.926 0 6.962 6.962 0 01-6.963 6.96 6.96 6.96 0 01-6.963-6.96z"
            ></path>
          </svg>
          <p className="font-monserat">
            TraitForge has 10 generations, with 10,000 entity’s within each
            generation.
          </p>
          <p className="font-monserat mt-9">
            Each generation will have a base starting point of 0.005 ETH, with a
            maximum ETH price for the final entity unique to the generation.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="40"
            fill="none"
            viewBox="0 0 597 40"
            className="absolute left-0 right-0 bottom-9 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#paint0_linear_1558_6552)"
              d="M1 .25H.25v1.5H1V.25zM238.39 1l.316-.68-.151-.07h-.165V1zm81.824 38l-.316.68.15.07h.166V39zM1 1.75h237.39V.25H1v1.5zm237.074-.07l81.824 38 .631-1.36-81.823-38-.632 1.36zm82.14 38.07H597v-1.5H320.214v1.5z"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1558_6552"
                x1="-103.294"
                x2="447.928"
                y1="-41.883"
                y2="294.784"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14494C"></stop>
                <stop offset="1" stopColor="#0ADFDB"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="col-span-12 md:col-span-4 py-14">
          <NftCardTwo className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
