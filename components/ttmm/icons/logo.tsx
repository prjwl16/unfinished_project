import { IconProps } from '@/types/utilities';

const Logo = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M26.628.785a2.431 2.431 0 10-2.703 4.042A2.431 2.431 0 0026.628.785zm-13.45 12.838v.011C7.52 10.353 3.373 9.021 3.373 9.021l12.87-5.522a2.484 2.484 0 011.908-.02c-1.325 2.794-3.62 7.585-4.973 10.144zm10.526.045l-.028.033-.02.023-3.733 4.347-.01.01c5.22 3.906 8.067 7.188 8.067 7.188l.021-14.014a2.482 2.482 0 00-.724-1.748l-3.573 4.161zM.286 27.804c5.824-3.82 10.885-10.388 12.887-14.17a68.965 68.965 0 016.738 4.452c-2.887 3.363-9.134 9.718-19.625 9.718z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Logo;
