import { memo, SVGProps } from 'react';

const SectionTitleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5V12.5C5 13.8807 3.88071 15 2.5 15C1.11929 15 0 13.8807 0 12.5V2.5Z"
      fill="url(#paint0_linear_2_3284)"
    />
    <path
      d="M7.5 2.5C7.5 1.11929 8.61929 0 10 0C11.3807 0 12.5 1.11929 12.5 2.5V12.5C12.5 13.8807 11.3807 15 10 15C8.61929 15 7.5 13.8807 7.5 12.5V2.5Z"
      fill="url(#paint1_linear_2_3284)"
    />
    <path
      d="M15 2.5C15 1.11929 16.1193 0 17.5 0C18.8807 0 20 1.11929 20 2.5V12.5C20 13.8807 18.8807 15 17.5 15C16.1193 15 15 13.8807 15 12.5V2.5Z"
      fill="url(#paint2_linear_2_3284)"
    />
    <defs>
      <linearGradient id="paint0_linear_2_3284" x1={-0.625} y1={7.5} x2={20} y2={7.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3C7A4" />
        <stop offset={1} stopColor="#E3C7A4" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="paint1_linear_2_3284" x1={-0.625} y1={7.5} x2={20} y2={7.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3C7A4" />
        <stop offset={1} stopColor="#E3C7A4" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="paint2_linear_2_3284" x1={-0.625} y1={7.5} x2={20} y2={7.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#E3C7A4" />
        <stop offset={1} stopColor="#E3C7A4" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(SectionTitleIcon);
export { Memo as SectionTitleIcon };
