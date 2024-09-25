interface Props {
  className?: string;
}

export const Line = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      fill="none"
      viewBox="0 0 296 40"
      className={className}
    >
      <path
        fill="url(#paint0_linear_1555_748)"
        d="M1 .25H.25v1.5H1V.25zM118.5 1l.513-.547-.216-.203h-.297V1zM159 39l-.513.547.216.203H159V39zM1 1.75h117.5V.25H1v1.5zm116.987-.203l40.5 38 1.026-1.094-40.5-38-1.026 1.094zM159 39.75h137v-1.5H159v1.5z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1555_748"
          x1="-50.622"
          x2="292.622"
          y1="-41.883"
          y2="61.883"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14494C"></stop>
          <stop offset="1" stopColor="#0ADFDB"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
