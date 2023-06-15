import { memo, SVGProps } from 'react';

const RoadmapLine = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 2646 1323" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M661.5 1323C296.163 1323 1.59694e-05 1026.84 0 661.5C-1.59694e-05 296.164 296.164 7.37996e-05 661.5 5.78302e-05L1984.5 0C2349.84 -1.59694e-05 2646 296.164 2646 661.5C2646 1026.84 2349.84 1323 1984.5 1323H661.5Z"
      stroke="url(#paint0_linear_2_3277)"
      strokeWidth={4}
    />
    <defs>
      <linearGradient id="paint0_linear_2_3277" x1={261.785} y1={181.279} x2={1664.17} y2={190.287} gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3C7A4" />
        <stop offset={1} stopColor="#E3C7A4" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(RoadmapLine);
export { Memo as RoadmapLine };
