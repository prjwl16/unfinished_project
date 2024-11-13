import { IconProps } from '@/types/utilities';

export default function Dot(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="7"
      fill="none"
      viewBox="0 0 6 7"
      {...props}
    >
      <ellipse
        cx="3"
        cy="3.09"
        fill="url(#paint0_linear_433_13324)"
        rx="3"
        ry="3.09"
      ></ellipse>
      <defs>
        <linearGradient
          id="paint0_linear_433_13324"
          x1="0.442"
          x2="4.925"
          y1="1.073"
          y2="4.289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CFC0E5"></stop>
          <stop offset="1" stopColor="#DCA8CE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
