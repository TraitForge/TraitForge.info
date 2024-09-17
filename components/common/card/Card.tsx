import React from 'react';
import classNames from 'classnames';

type CardTypes = {
  text: string;
  svg: string; // ReactNode can represent JSX elements
};

export const Card: React.FC<CardTypes> = ({ text, svg }) => {
const wrapperClasses = classNames(
  'border-[0.3px] border-[#057977] rounded-[20px] px-2 md:px-2 pt-4 pb-5 md:pt-4 bg-gradient-to-tr from-[#057977]/5 to-[#0ADFDB]/15 flex flex-col items-center justify-center h-[310px]'
);


  return (
    <div>
      <div className={wrapperClasses}>
        <div className="flex justify-between items-center flex-col">
          <div className="relative w-full pt-1 md:pt-0">
            <div className="hidden md:block absolute top-1">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 296 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0.25H0.25V1.75H1V0.25ZM118.5 1L119.013 0.453058L118.797 0.25H118.5V1ZM159 39L158.487 39.5469L158.703 39.75H159V39ZM1 1.75H118.5V0.25H1V1.75ZM117.987 1.54694L158.487 39.5469L159.513 38.4531L119.013 0.453058L117.987 1.54694ZM159 39.75H296V38.25H159V39.75Z"
                  fill="url(#paint0_linear_1401_7592)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1401_7592"
                    x1="-50.6222"
                    y1="-41.8827"
                    x2="292.622"
                    y2="61.8827"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={'#0ADFDB'} />
                    <stop offset="1" stopColor={'#057977'} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center pt-[50px] pb-[20px] w-[210px]">
          <img src={svg} alt="SVG Image" className="w-4/12 h-auto pb-[30px]" />
          <div className="w-8/12">
            {text}
            </div>
          </div>
        </div>
        <div>
          <svg
            width="100%" 
            height="auto"
            viewBox="0 0 296 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.25H0.25V1.75H1V0.25ZM118.5 1L119.013 0.453058L118.797 0.25H118.5V1ZM159 39L158.487 39.5469L158.703 39.75H159V39ZM1 1.75H118.5V0.25H1V1.75ZM117.987 1.54694L158.487 39.5469L159.513 38.4531L119.013 0.453058L117.987 1.54694ZM159 39.75H296V38.25H159V39.75Z"
              fill="url(#paint0_linear_1401_7592)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1401_7592"
                x1="-50.6222"
                y1="-41.8827"
                x2="292.622"
                y2="61.8827"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={'#0ADFDB'} />
                <stop offset="1" stopColor={'#057977'} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
