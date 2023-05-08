import colors from '../../../css/colors';

import { SvgIconsType } from './types';

const HalfPizza = ({
  width = '15',
  height = '30',
  viewBox = '0 0 15 30',
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
      <g clipPath="url(#clip0_964_694)">
        <path
          d="M11.3906 0.421877C8.62499 1.125 4.92187 3.5625 3.18749 5.85938C-2.62501 13.5 -5.72205e-06 24.3281 8.67187 28.5938C12 30.2344 17.9062 30.2344 21.3281 28.5938C24.3281 27.1406 27.1406 24.3281 28.5937 21.3281C30.2344 17.9063 30.2344 12 28.5937 8.67188C27.0937 5.67188 24.2812 2.85938 21.3281 1.45313C18.7969 0.234377 14.0156 -0.234373 11.3906 0.421877ZM14.5312 1.3125C14.5312 1.54688 13.4062 1.96875 12.0469 2.29688C10.6875 2.57813 8.76562 3.375 7.82812 3.98438C5.99999 5.25 5.62499 5.39063 5.62499 4.73438C5.62499 4.125 8.67187 2.34375 10.9219 1.59375C13.2656 0.890627 14.5312 0.796877 14.5312 1.3125ZM20.8594 2.34375C23.25 3.42188 24.7031 4.5 24.2812 4.92188C24.0937 5.10938 23.3906 4.82813 22.6406 4.3125C21.2812 3.375 17.3437 1.875 16.1719 1.875C15.7969 1.875 15.4687 1.64063 15.4687 1.35938C15.4687 0.656252 18.375 1.17188 20.8594 2.34375ZM5.15624 5.90625C5.15624 6.04688 4.64062 6.89063 3.98437 7.82813C3.37499 8.76563 2.57812 10.6875 2.29687 12.0469C1.96874 13.4063 1.54687 14.5313 1.31249 14.5313C0.421869 14.5313 1.45312 10.4531 3.09374 7.59375C4.07812 5.90625 5.15624 5.01563 5.15624 5.90625ZM27.2812 8.48438C28.6875 11.2969 29.4375 14.5313 28.6875 14.5313C28.4531 14.5313 28.0781 13.7344 27.8906 12.7969C27.7031 11.8594 27 9.98438 26.3437 8.71875C24.6562 5.48438 24.6562 5.48438 25.3594 5.71875C25.7344 5.85938 26.5781 7.07813 27.2812 8.48438ZM1.87499 16.1719C1.87499 17.3438 3.37499 21.2813 4.31249 22.6406C5.39062 24.1406 4.96874 25.0781 3.89062 23.6719C2.06249 21.2813 0.281244 15.4688 1.35937 15.4688C1.64062 15.4688 1.87499 15.7969 1.87499 16.1719ZM23 24C19 28.5 9.5 27 7 24C4.5 21 3.42187 19.1719 3.04687 17.2031L2.71874 15.4688L3.63647 10.7812L5.99999 6.5L9.5 4L14.8893 2.34375L19.6959 3.81426L22 5L23.5 6.5L26 9.1875L27.5 15L25.5 21.5156C25.5 21.5156 27 19.5 23 24ZM28.8281 17.2031C28.2656 20.25 25.7812 25.0313 25.125 24.3281C24.9844 24.1875 25.4531 22.9219 26.2031 21.5156C26.9531 20.1094 27.75 18.1875 27.8906 17.2031C28.0781 16.2656 28.4531 15.4688 28.6875 15.4688C28.9687 15.4688 29.0625 16.1719 28.8281 17.2031ZM8.71874 26.3438C9.98437 27 11.8594 27.7031 12.7969 27.8906C13.7344 28.0781 14.5312 28.4531 14.5312 28.6875C14.5312 29.9531 6.18749 26.8125 5.71874 25.3594C5.48437 24.6563 5.48437 24.6563 8.71874 26.3438ZM24.2812 25.4063C23.7656 26.8594 15.4687 29.9531 15.4687 28.6875C15.4687 28.4063 16.2656 28.0781 17.25 27.8906C18.1875 27.75 20.0625 27 21.3281 26.2969C24 24.75 24.5156 24.6094 24.2812 25.4063Z"
          fill={colors.black}
        />
        <path
          d="M12.6562 5.15625C12.6562 5.67188 12.8906 6.09375 13.125 6.09375C13.4062 6.09375 13.5938 5.67188 13.5938 5.15625C13.5938 4.64062 13.4062 4.21875 13.125 4.21875C12.8906 4.21875 12.6562 4.64062 12.6562 5.15625Z"
          fill={colors.black}
        />
        <path
          d="M9.09377 5.34359C8.62502 6.56234 9.28127 7.59359 10.4063 7.40609C11.9531 7.21859 11.9531 4.96859 10.4063 4.78109C9.7969 4.68734 9.2344 4.92172 9.09377 5.34359ZM10.7813 6.09359C10.7813 6.32797 10.5938 6.56234 10.3125 6.56234C10.0781 6.56234 9.84377 6.32797 9.84377 6.09359C9.84377 5.81234 10.0781 5.62484 10.3125 5.62484C10.5938 5.62484 10.7813 5.81234 10.7813 6.09359Z"
          fill={colors.black}
        />
        <path
          d="M11.4375 8.15609C10.9688 9.37484 11.625 10.4061 12.75 10.2186C14.2969 10.0311 14.2969 7.78109 12.75 7.59359C12.1406 7.49984 11.5781 7.73422 11.4375 8.15609ZM13.125 8.90609C13.125 9.14047 12.9375 9.37484 12.6563 9.37484C12.4219 9.37484 12.1875 9.14047 12.1875 8.90609C12.1875 8.62484 12.4219 8.43734 12.6563 8.43734C12.9375 8.43734 13.125 8.62484 13.125 8.90609Z"
          fill={colors.black}
        />
        <path
          d="M4.87502 9.09359C4.40627 10.3123 5.06252 11.3436 6.18752 11.1561C7.7344 10.9686 7.7344 8.71859 6.18752 8.53109C5.57815 8.43734 5.01565 8.67172 4.87502 9.09359ZM6.56252 9.84359C6.56252 10.078 6.37502 10.3123 6.09377 10.3123C5.8594 10.3123 5.62502 10.078 5.62502 9.84359C5.62502 9.56234 5.8594 9.37484 6.09377 9.37484C6.37502 9.37484 6.56252 9.56234 6.56252 9.84359Z"
          fill={colors.black}
        />
        <path
          d="M8.15627 11.9061C7.68752 13.1248 8.34377 14.1561 9.46877 13.9686C11.0156 13.7811 11.0156 11.5311 9.46877 11.3436C8.8594 11.2498 8.2969 11.4842 8.15627 11.9061ZM9.84377 12.6561C9.84377 12.8905 9.65627 13.1248 9.37502 13.1248C9.14065 13.1248 8.90627 12.8905 8.90627 12.6561C8.90627 12.3748 9.14065 12.1873 9.37502 12.1873C9.65627 12.1873 9.84377 12.3748 9.84377 12.6561Z"
          fill={colors.black}
        />
        <path
          d="M3.98435 12.2344C3.79685 12.5156 3.74998 12.8437 3.8906 12.9844C4.21873 13.3125 5.15623 12.7031 5.15623 12.1406C5.15623 11.5781 4.35935 11.5781 3.98435 12.2344Z"
          fill={colors.black}
        />
        <path
          d="M6.1875 13.1721C6.28125 13.5002 6.65625 13.8752 6.98437 13.9689C7.35937 14.1096 7.54687 13.9221 7.40625 13.5471C7.3125 13.2189 6.9375 12.8439 6.60937 12.7502C6.23437 12.6096 6.04687 12.7971 6.1875 13.1721Z"
          fill={colors.black}
        />
        <path
          d="M6.3281 16.4531C6.1406 16.7344 6.09373 17.0625 6.23435 17.2031C6.56248 17.5312 7.49998 16.9219 7.49998 16.3594C7.49998 15.7969 6.7031 15.7969 6.3281 16.4531Z"
          fill={colors.black}
        />
        <path
          d="M8.15627 16.5936C7.68752 17.8123 8.34377 18.8436 9.46877 18.6561C10.2656 18.5623 10.5469 18.1873 10.5469 17.3436C10.5469 16.4998 10.2656 16.1248 9.46877 16.0311C8.8594 15.9373 8.2969 16.1717 8.15627 16.5936ZM9.84377 17.3436C9.84377 17.578 9.65627 17.8123 9.37502 17.8123C9.14065 17.8123 8.90627 17.578 8.90627 17.3436C8.90627 17.0623 9.14065 16.8748 9.37502 16.8748C9.65627 16.8748 9.84377 17.0623 9.84377 17.3436Z"
          fill={colors.black}
        />
        <path
          d="M3.84375 17.3908C3.9375 17.7189 4.3125 18.0939 4.64062 18.1877C5.01562 18.3283 5.20312 18.1408 5.0625 17.7658C4.96875 17.4377 4.59375 17.0627 4.26562 16.9689C3.89062 16.8283 3.70312 17.0158 3.84375 17.3908Z"
          fill={colors.black}
        />
        <path
          d="M12.0467 15.4684C12.1404 15.7966 12.5154 16.1716 12.8436 16.2653C13.2186 16.4059 13.4061 16.2184 13.2654 15.8434C13.1717 15.5153 12.7967 15.1403 12.4686 15.0466C12.0936 14.9059 11.9061 15.0934 12.0467 15.4684Z"
          fill={colors.black}
        />
        <path
          d="M4.87502 19.4061C4.40627 20.6248 5.06252 21.6561 6.18752 21.4686C6.9844 21.3748 7.26565 20.9998 7.26565 20.1561C7.26565 19.3123 6.9844 18.9373 6.18752 18.8436C5.57815 18.7498 5.01565 18.9842 4.87502 19.4061ZM6.56252 20.1561C6.56252 20.3905 6.37502 20.6248 6.09377 20.6248C5.8594 20.6248 5.62502 20.3905 5.62502 20.1561C5.62502 19.8748 5.8594 19.6873 6.09377 19.6873C6.37502 19.6873 6.56252 19.8748 6.56252 20.1561Z"
          fill={colors.black}
        />
        <path
          d="M12.4219 19.2656C12.2344 19.5469 12.1875 19.875 12.3281 20.0156C12.6562 20.3437 13.5937 19.7344 13.5937 19.1719C13.5937 18.6094 12.7969 18.6094 12.4219 19.2656Z"
          fill={colors.black}
        />
        <path
          d="M12.2812 22.0783C12.375 22.4064 12.75 22.7814 13.0781 22.8752C13.4531 23.0158 13.6406 22.8283 13.5 22.4533C13.4062 22.1252 13.0312 21.7502 12.7031 21.6564C12.3281 21.5158 12.1406 21.7033 12.2812 22.0783Z"
          fill={colors.black}
        />
        <path
          d="M9.09377 22.6873C8.62502 23.9061 9.28127 24.9373 10.4063 24.7498C11.2031 24.6561 11.4844 24.2811 11.4844 23.4373C11.4844 22.5936 11.2031 22.2186 10.4063 22.1248C9.7969 22.0311 9.2344 22.2655 9.09377 22.6873ZM10.7813 23.4373C10.7813 23.6717 10.5938 23.9061 10.3125 23.9061C10.0781 23.9061 9.84377 23.6717 9.84377 23.4373C9.84377 23.1561 10.0781 22.9686 10.3125 22.9686C10.5938 22.9686 10.7813 23.1561 10.7813 23.4373Z"
          fill={colors.black}
        />
        <path
          d="M12.4219 24.8906C12.2344 25.1719 12.1875 25.5 12.3281 25.6406C12.6562 25.9687 13.5937 25.3594 13.5937 24.7969C13.5937 24.2344 12.7969 24.2344 12.4219 24.8906Z"
          fill={colors.black}
        />
        <mask id="path-18-inside-1_964_694" fill={colors.secondary}>
          <path d="M14 0H30V30H14V0Z" />
        </mask>
        <path d="M14 0H30V30H14V0Z" fill={colors.secondary} />
        <path
          d="M14.4 30V0H13.6V30H14.4Z"
          fill={colors.black}
          mask="url(#path-18-inside-1_964_694)"
        />
      </g>
      <defs>
        <clipPath id="clip0_964_694">
          <rect width="15" height="30" fill={colors.secondary} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HalfPizza;
