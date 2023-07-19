import { memo, SVGProps } from 'react';

const RoadmapCircleEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill="black" stroke="#E3C7A4" strokeWidth={5} />
  </svg>
);

const Memo = memo(RoadmapCircleEmpty);
export { Memo as RoadmapCircleEmpty };
