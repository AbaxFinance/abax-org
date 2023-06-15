import { memo, SVGProps } from 'react';

const SectionHorizontalDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 1400 1" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 9.15527e-05L453 0.000131155" stroke="#E3C7A4" />
    <path d="M453 9.15527e-05L1400 0.000174342" stroke="#393939" />
  </svg>
);

const Memo = memo(SectionHorizontalDivider);
export { Memo as SectionHorizontalDivider };
