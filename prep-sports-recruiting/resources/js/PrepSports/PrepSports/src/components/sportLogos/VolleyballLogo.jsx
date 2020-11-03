import React from 'react';
import cn from 'classnames';

const VolleyballLogo = ({ isAboutSportPage = false, isHover = false }) => {
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
          d="M2285 4124 c-384 -58 -691 -209 -951 -468 -242 -243 -398 -541 -454
   -870 -24 -144 -27 -385 -5 -526 53 -346 210 -655 461 -905 494 -493 1242 -615
   1869 -304 721 357 1071 1190 824 1959 -153 478 -536 867 -1017 1034 -180 62
   -272 77 -497 81 -110 2 -213 1 -230 -1z m339 -340 l99 -77 -98 -49 c-357 -181
   -668 -457 -888 -790 -118 -177 -212 -367 -302 -606 l-27 -74 -34 33 c-19 18
   -62 72 -95 119 -73 102 -73 97 -1 317 194 586 534 934 1137 1164 55 21 102 39
   105 39 3 0 49 -34 104 -76z m220 65 c107 -30 415 -379 532 -602 l46 -88 -91
   71 c-76 60 -97 84 -138 153 -77 132 -158 234 -283 360 -65 64 -115 117 -112
   117 4 0 25 -5 46 -11z m-858 -52 c-208 -131 -311 -212 -428 -336 -185 -197
   -329 -445 -423 -729 -15 -46 -29 -81 -32 -79 -7 8 26 175 53 267 32 105 106
   260 175 364 98 149 281 321 448 421 82 49 276 135 207 92z m1534 -367 c113
   -132 193 -261 249 -402 32 -80 74 -230 87 -308 l7 -44 -63 79 c-35 44 -78 96
   -95 116 -21 24 -37 57 -49 104 -48 191 -124 341 -306 608 -27 39 111 -86 170
   -153z m-609 80 c34 -41 84 -108 110 -149 l48 -74 -97 -57 c-212 -122 -363
   -240 -523 -407 -210 -219 -376 -482 -509 -803 -24 -58 -45 -107 -47 -109 -13
   -19 -301 108 -338 149 -17 19 -16 24 30 147 199 539 487 916 905 1189 103 68
   339 196 352 191 3 -1 34 -36 69 -77z m346 -422 c176 -141 381 -367 535 -593
   l76 -110 -10 -68 c-10 -78 -49 -236 -69 -284 l-14 -33 -479 458 c-264 253
   -482 464 -484 470 -6 18 318 221 355 222 6 0 47 -28 90 -62z m-65 -749 c276
   -265 504 -487 506 -493 5 -20 -110 -187 -176 -257 l-59 -63 -40 26 c-207 137
   -1093 842 -1093 869 0 4 33 51 74 105 83 112 251 294 271 294 7 0 240 -216
   517 -481z m-1919 -245 c140 -154 346 -277 566 -338 82 -22 92 -28 147 -83 32
   -33 90 -87 128 -121 76 -68 73 -72 -34 -47 -236 55 -477 174 -700 345 -131
   101 -193 159 -207 192 -15 35 -63 223 -63 246 0 8 26 -22 58 -65 33 -43 80
   -101 105 -129z m1162 26 c265 -222 560 -454 775 -610 63 -45 119 -86 124 -90
   20 -19 -286 -196 -332 -192 -45 4 -202 62 -304 113 -193 97 -424 267 -586 431
   l-72 74 26 64 c44 111 95 222 136 298 40 72 40 72 62 55 12 -10 89 -74 171
   -143z m-949 -537 c96 -61 274 -144 395 -184 155 -52 284 -77 433 -86 119 -6
   120 -6 195 -51 42 -25 112 -62 156 -82 l80 -38 -50 -8 c-93 -16 -392 -10 -484
   10 -262 56 -494 177 -682 354 -76 71 -139 145 -108 127 7 -5 37 -24 65 -42z"
        />
      </g>
    </svg>
  );
};

export default VolleyballLogo;
