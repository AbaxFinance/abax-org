import { memo, SVGProps } from 'react';

const RoadmapLineMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="89" height="973" viewBox="0 0 89 973" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="-186" y="2" width="273" height="969" rx="136.5" stroke="url(#paint0_linear_496_2632)" strokeWidth="4" />
    <defs>
      <linearGradient id="paint0_linear_496_2632" x1="-49.5" y1="0" x2="-49.5" y2="973" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3C7A4" />
        <stop offset="1" stopColor="#E3C7A4" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(RoadmapLineMobile);
export { Memo as RoadmapLineMobile };
