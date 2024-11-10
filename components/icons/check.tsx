interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const Check: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
    className="h-6 w-6"
  >
    <path
      stroke="#9A81B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16.667 5.09L7.5 14.256 3.333 10.09"
    ></path>
  </svg>
);

export default Check;
