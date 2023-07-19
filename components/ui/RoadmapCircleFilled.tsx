import { memo, SVGProps } from 'react';

const RoadmapCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill="#BCA588" />
  </svg>
);

const Memo = memo(RoadmapCircleFilled);
export { Memo as RoadmapCircleFilled };
