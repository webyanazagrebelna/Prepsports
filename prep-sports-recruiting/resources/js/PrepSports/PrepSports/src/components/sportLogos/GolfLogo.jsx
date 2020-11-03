import React from 'react';
import cn from 'classnames';

const GolfLogo = ({ isAboutSportPage = false, isHover = false }) => {
  const pickStyle = () => {
    if (isAboutSportPage) {
      if (isHover) {
        return {
          fill: '#fff',
        };
      } else {
        return { fill: '#282828' };
      }
    } else return null;
  };
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="500.000000pt"
      height="500.000000pt"
      viewBox="0 0 500.000000 500.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn('tiles__svg', {
        'about-sport-page': isAboutSportPage,
      })}
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        style={pickStyle()}
        stroke="none"
      >
        <path
          d="M2355 4124 c-296 -29 -549 -118 -781 -272 -680 -455 -919 -1354 -553
-2083 366 -730 1190 -1076 1969 -827 489 156 884 550 1045 1042 107 326 105
709 -5 1038 -169 503 -598 908 -1110 1047 -160 44 -423 69 -565 55z m395 -273
c417 -83 779 -359 969 -739 54 -108 106 -262 127 -382 26 -138 23 -364 -5
-497 -84 -402 -324 -737 -669 -935 -646 -372 -1456 -169 -1864 468 -76 119
-151 309 -184 469 -14 68 -19 132 -19 260 0 192 15 284 72 449 173 500 618
859 1145 926 103 13 316 3 428 -19z"
        />
        <path
          d="M3227 3315 c-32 -24 -61 -46 -64 -49 -3 -3 2 -22 12 -42 37 -78 0
-180 -78 -218 -19 -9 -59 -16 -89 -16 l-53 0 -21 -80 -21 -80 34 -6 c66 -12
175 1 228 28 70 36 137 111 165 184 30 82 25 188 -14 268 -15 31 -31 56 -34
55 -4 0 -33 -20 -65 -44z"
        />
        <path
          d="M2673 3215 l-62 -45 19 -43 c24 -53 25 -81 1 -134 -29 -62 -88 -98
-162 -97 l-58 1 -20 -76 c-14 -49 -17 -79 -11 -85 6 -6 47 -10 93 -10 69 0 92
5 145 29 173 78 249 284 166 453 -14 28 -31 52 -37 52 -7 0 -40 -21 -74 -45z"
        />
        <path
          d="M3602 2725 l-61 -45 20 -46 c50 -113 -36 -229 -168 -227 l-52 0 -17
-56 c-28 -98 -27 -105 31 -113 62 -8 156 7 207 33 131 67 209 227 178 364 -14
63 -48 135 -64 135 -7 0 -40 -20 -74 -45z"
        />
        <path
          d="M3082 2615 c-34 -25 -62 -48 -62 -52 1 -5 7 -19 15 -33 19 -33 19
-104 1 -139 -36 -68 -110 -106 -195 -98 -23 2 -26 -4 -45 -75 -11 -42 -17 -80
-13 -85 5 -4 48 -7 97 -7 81 0 94 3 156 34 127 65 190 177 182 324 -3 71 -38
166 -64 173 -6 2 -39 -17 -72 -42z"
        />
        <path
          d="M2559 2544 c-35 -26 -66 -48 -68 -50 -2 -2 4 -19 13 -38 20 -42 21
-108 1 -145 -33 -64 -115 -106 -185 -95 l-36 6 -18 -77 c-12 -52 -15 -80 -8
-87 6 -6 49 -9 103 -6 109 4 162 25 228 88 111 108 134 299 53 423 l-19 28
-64 -47z"
        />
        <path
          d="M3316 2075 c-32 -25 -61 -47 -64 -50 -3 -2 3 -23 13 -45 35 -79 0
-177 -78 -214 -19 -9 -59 -16 -89 -16 l-54 0 -21 -79 -21 -79 22 -6 c48 -13
156 -6 210 15 73 27 148 96 183 167 24 50 28 69 28 147 0 79 -4 97 -28 148
-16 31 -32 57 -35 57 -4 0 -34 -21 -66 -45z"
        />
        <path
          d="M2138 1952 c-47 -33 -66 -52 -61 -62 32 -79 34 -95 22 -137 -22 -79
-114 -139 -193 -126 -37 6 -38 4 -66 -106 -15 -56 -8 -61 92 -61 143 0 249 63
309 185 26 53 31 76 32 137 1 77 -20 156 -51 195 l-17 22 -67 -47z"
        />
        <path
          d="M2767 1905 c-32 -24 -61 -46 -64 -49 -3 -3 2 -22 12 -42 37 -78 0
-180 -78 -218 -19 -9 -59 -16 -89 -16 l-54 0 -21 -79 -21 -79 22 -6 c49 -13
156 -6 213 15 79 29 162 113 192 195 32 83 27 187 -12 267 -16 31 -32 57 -35
56 -4 0 -33 -20 -65 -44z"
        />
      </g>
    </svg>
  );
};

export default GolfLogo;
