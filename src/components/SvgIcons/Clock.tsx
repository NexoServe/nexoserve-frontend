import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const Clock = ({
  width = '20',
  height = '20',
  viewBox = '0 0 20 20',
  fill = 'none',
  styleClass,
}: SvgIconsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      className={styleClass}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 18.3332C5.39759 18.3332 1.66663 14.6022 1.66663 9.99984C1.66663 5.39746 5.39759 1.6665 9.99996 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984C18.3282 14.6001 14.6002 18.3281 9.99996 18.3332ZM9.99996 3.33317C6.31806 3.33317 3.33329 6.31794 3.33329 9.99984C3.33329 13.6817 6.31806 16.6665 9.99996 16.6665C13.6819 16.6665 16.6666 13.6817 16.6666 9.99984C16.6625 6.31965 13.6801 3.3373 9.99996 3.33317ZM14.1666 10.8332H9.16663V5.83317H10.8333V9.1665H14.1666V10.8332Z"
        fill={colors.black}
      />
    </svg>
  );
};

export default Clock;
