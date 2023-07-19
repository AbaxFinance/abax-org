import { memo, SVGProps } from 'react';

const SectionVerticalDividerAccent = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 1 177" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0V177" stroke="#E3C7A4" />
  </svg>
);

const Memo = memo(SectionVerticalDividerAccent);
export { Memo as SectionVerticalDividerAccent };
