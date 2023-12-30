import { SvgIconsType } from './types';

const PickUp = ({
  width = '30',
  height = '24',
  viewBox = '0 0 30 24',
  fill = 'none',
  styleClass,
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      className={styleClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 11C9 11 9 1 15 1C21 1 21 11 21 11" stroke={fill} />
      <rect x="3.5" y="8.5" width="23" height="15" stroke={fill} />
    </svg>
  );
};

export default PickUp;
