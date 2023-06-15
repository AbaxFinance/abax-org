import { memo, SVGProps } from 'react';

const SectionVerticalDividerLong = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 1 499" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0L2.1812e-05 499" stroke="#393939" />
  </svg>
);

const Memo = memo(SectionVerticalDividerLong);
export { Memo as SectionVerticalDividerLong };
