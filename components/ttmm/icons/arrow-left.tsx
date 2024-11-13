import { IconProps } from '@/types/utilities';
import React from 'react';

function ArrowLeft(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.833 7.001H1.166m0 0L7 1.168M1.166 7.001L7 12.835"
      ></path>
    </svg>
  );
}

export default ArrowLeft;
