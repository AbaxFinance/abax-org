import { memo, SVGProps } from 'react';

const HamburgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 13L28 13" stroke="white" strokeWidth={2} />
    <path d="M4 21L21 21" stroke="white" strokeWidth={2} />
  </svg>
);

const Memo = memo(HamburgerMenuIcon);
export { Memo as HamburgerMenuIcon };
