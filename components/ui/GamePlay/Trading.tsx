import { NftTrading } from "@/icons/NftTrading";

export const Trading = () => {
  return (
    <section className="container lg:w-9/12 mx-auto mt-[100px]">
      <div className="relative border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md  grid grid-cols-12 after:translate-y-full gap-5 xl:gap-x-[70px] after:h-[101px] after:w-0.5 after:bg-primary after:absolute after:bottom-0 after:left-20 ">
        <div className="col-span-8 relative py-24">
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
          <h3 className="text-4xl text-white font-race">trading</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="285"
            height="10"
            fill="none"
            viewBox="0 0 285 10"
            className="my-10"
          >
            <path
              fill="#0EEB81"
              d="M280.028.316a4.571 4.571 0 00-4.504 3.82H9.088A4.573 4.573 0 004.583.316a4.583 4.583 0 100 9.165 4.573 4.573 0 004.505-3.817h266.436a4.572 4.572 0 004.504 3.817A4.581 4.581 0 00284.61 4.9a4.58 4.58 0 00-4.582-4.584z"
            ></path>
            <path
              fill="#0EEB81"
              d="M162.803 3.08C162.148 1.29 160.46 0 158.444 0H15.504c-2.015 0-3.703 1.29-4.358 3.08h151.657zM11.31 6.719a4.664 4.664 0 004.195 2.636h142.939a4.667 4.667 0 004.194-2.636H11.311z"
            ></path>
          </svg>
          <p className="font-monserat">
            Entities can be traded via the 'Trading' page or traded directly
            through a marketplace like opensea. 10% of the Trading fee will be
            routed to the honeypot for extra game economy.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="597"
            height="40"
            fill="none"
            viewBox="0 0 597 40"
            className="absolute left-0 right-0 px-3 bottom-9 w-full "
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
        <div className="col-span-4 py-14">
          <NftTrading className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
