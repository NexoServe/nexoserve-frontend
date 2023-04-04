import { SvgIconsType } from './types';

const EmptyCart = ({
  width = '116',
  height = '116',
  viewBox = '0 0 116 116',
  fill = 'none',
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M26 46C26 46 26 2 58 2C90 2 90 46 90 46"
          stroke="#4A4A4A"
          strokeWidth="2"
        />
        <path
          d="M33 59C40.9797 64.4834 45.3711 64.1811 53 59"
          stroke="#4A4A4A"
          strokeWidth="2"
        />
        <path
          d="M74 59C81.9797 64.4834 86.3711 64.1811 94 59"
          stroke="#4A4A4A"
          strokeWidth="2"
        />
        <rect
          x="1"
          y="38"
          width="114"
          height="77"
          stroke="#4A4A4A"
          strokeWidth="2"
        />
        <circle cx="68" cy="92" r="4" fill="#4A4A4A" />
        <path d="M74 84H77L74 87H77.5" stroke="#4A4A4A" strokeWidth="0.5" />
        <path d="M82 74H85L82 77H85.5" stroke="#4A4A4A" strokeWidth="0.5" />
        <path d="M78 79H81L78 82H81.5" stroke="#4A4A4A" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

export default EmptyCart;
