import Image from "next/image";

export const ForgingSection = () => {
  return (
    <section className="container w-full lg:w-9/12 flex justify-start mt-[100px]">
      <div className="relative border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md  lg::w-10/12 grid grid-cols-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="40"
          fill="none"
          viewBox="0 0 677 40"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 px-9 w-full top-9"
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
        <div className="col-span-12 md:col-span-8 relative py-24">
          <h3 className="text-4xl text-white font-race uppercase">Forging</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="284"
            height="20"
            fill="none"
            viewBox="0 0 284 20"
            className="my-10"
          >
            <path
              fill="#FD8D26"
              d="M1.575 7.71c.973-3.561 4.224-6.182 8.095-6.182h264.245c3.871 0 7.121 2.621 8.095 6.182h1.575c-1.012-4.408-4.958-7.71-9.67-7.71H9.67C4.96 0 1.012 3.302 0 7.71h1.575zM281.918 12.479a8.402 8.402 0 01-8.003 5.848H9.67c-3.75 0-6.922-2.459-8.003-5.848H.087c1.13 4.239 4.993 7.376 9.585 7.376h264.245c4.59 0 8.453-3.137 9.584-7.376h-1.583z"
            ></path>
            <path
              fill="#FD8D26"
              d="M155.414 16.802h9.15L150.816 3.056h-9.148l13.746 13.746zM143.494 16.802h9.774L139.522 3.056h-9.777l13.749 13.746zM130.159 16.802h11.186L127.599 3.056h-11.186l13.746 13.746zM114.001 16.802h14.011L114.264 3.056h-14.009l13.746 13.746zM95.177 16.802h16.678L98.107 3.056H81.429l13.748 13.746zM71.175 16.802H93.03L79.283 3.056H57.43l13.745 13.746zM41.998 16.802h27.031L55.281 3.056H28.25l13.749 13.746zM26.103 3.056H9.67a6.881 6.881 0 00-6.873 6.873 6.881 6.881 0 006.873 6.873h30.179L26.103 3.056zM166.71 16.802h8.521L161.483 3.056h-8.519l13.746 13.746zM177.377 16.802h7.746L171.375 3.056h-7.744l13.746 13.746z"
            ></path>
          </svg>
          <p className="font-monserat">
            forging Forging is the process of two players creating a new entity.
            This process relies on the “roles” of an entity forger/merger.
          </p>
          <p className="font-monserat mt-9">
            A forger entity has the ability to list an ETH price for “forging”,
            putting itself on the market for merger entities to interact with. 
            a maximum ETH price for the final entity unique to the generation.
          </p>
          <div className="md:pr-20">
            <p className="font-monserat mt-9 font-bold">
              1. A forger lists itself with an ETH fee for the merger to pay.
            </p>
            <p className="font-monserat mt-9 font-bold">
              2. A merger entity interacts and pays the forger's set ETH fee.{" "}
            </p>
            <p className="font-monserat mt-9 font-bold">
              3. The two parent entities average the traits /2 and create a new
              offspring entity for the merger to take home.{" "}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="597"
            height="40"
            fill="none"
            viewBox="0 0 597 40"
            className="absolute left-0 right-0 px-0 bottom-9 w-full "
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
        <div className="col-span-12 md:col-span-4 py-14 relative">
          <div className="grid grid-cols-4 md:absolute md:bottom-9 md:right-0 md:w-[120%]">
            <Image
              src="/images/forge-one.png"
              width={400}
              height={300}
              alt="forge card one"
              className="col-span-2 min-h-[270px] w-auto col-start-2"
            />
            <Image
              src="/images/forge-two.png"
              width={400}
              height={400}
              alt="forge card one"
              className="col-span-2 min-h-[270px] w-auto"
            />
            <Image
              src="/images/forge-three.png"
              width={400}
              height={400}
              alt="forge card one"
              className="col-span-2 min-h-[270px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
