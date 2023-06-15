import { memo, SVGProps } from 'react';

const SectionVerticalDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 1 391" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0L1.70912e-05 391" stroke="#4A4A4A" />
  </svg>
);

const Memo = memo(SectionVerticalDivider);
export { Memo as SectionVerticalDivider };
