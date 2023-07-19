'use client';
import { Bead } from '@/components/ui/Bead';
import { BeadsFlexContainer, BeadsTextContainer } from '@/components/ui/BeadsWithText';
import { FC, memo } from 'react';

const heroTitle = (
  <div className="flex h-full items-center justify-center text-left  text-4xl font-normal leading-[3rem] tracking-tight transition-all animate-in fade-in duration-700 sm:text-5xl sm:leading-[4rem] md:slide-in-from-left-12 lg:-mt-2 lg:-translate-x-4">
    Abax
    <br />
    Protocol
  </div>
);

const heroDescription = (
  <>
    <h3 className="flex h-full items-center whitespace-pre-wrap py-4 pl-1 text-left text-sm font-normal tracking-tight transition-all animate-in fade-in duration-1000 xs:hidden sm:p-4 sm:leading-10 lg:-mt-2 lg:p-8 lg:pl-24 lg:text-xl">
      {`With fair interest rates and high security, you can grow your capital with Abax both as a lender as well as a borrower.`}
    </h3>
    <h3 className="hidden h-full items-center whitespace-pre-wrap py-4 pl-1 text-left text-sm font-normal tracking-tight transition-all animate-in fade-in slide-in-from-right-12 duration-1000 xs:flex sm:p-4 sm:leading-10 lg:-mt-2 lg:p-8 lg:pl-24 lg:text-xl">
      {`With fair interest rates and high security,\n you can grow your capital with Abax both \n as a lender as well as a borrower.`}
    </h3>
  </>
);

const BeadsFillRight = () => (
  <>
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
    <Bead size={'defaultShrinkable'} />
  </>
);

const LandingBeadsSectionContent: FC = () => {
  return (
    <>
      <BeadsFlexContainer className="gap-4 md:gap-8">
        <Bead className="block" size={'defaultShrinkable'} />
        <Bead className="hidden xs:block" size={'defaultShrinkable'} />
        <Bead className="hidden xs:block" size={'defaultShrinkable'} />
        <Bead className="hidden lg:block" size={'defaultShrinkable'} />
        <Bead className="hidden lg:block" size={'defaultShrinkable'} />
        <Bead className="hidden xl:block" size={'defaultShrinkable'} />
        <Bead className="hidden 2xl:block" size={'defaultShrinkable'} />
        <Bead className="hidden 3xl:block" size={'defaultShrinkable'} />
        <Bead className="hidden 3xl:block" size={'defaultShrinkable'} />
        <BeadsTextContainer className="-mr-1 block xs:hidden" containerWidthInBeeds={2} text={heroTitle} />
        <BeadsTextContainer className="-mr-9 hidden -translate-x-16 xs:block md:hidden" containerWidthInBeeds={3} text={heroTitle} />
        <BeadsTextContainer className="-mr-9 hidden -translate-x-6 md:block lg:hidden" containerWidthInBeeds={3} text={heroTitle} />
        <BeadsTextContainer className="hidden lg:block" containerWidthInBeeds={3} text={heroTitle} />
        <BeadsFillRight />
      </BeadsFlexContainer>
      <BeadsFlexContainer className="gap-4 xs:hidden md:gap-8">
        <Bead className="sm:hidden" size={'defaultShrinkable'} />
        <Bead className="sm:hidden" size={'defaultShrinkable'} />
        <Bead className="invisible block" size={'defaultShrinkable'} />
        <Bead className="invisible block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden xs:block sm:hidden" size={'defaultShrinkable'} />
        <Bead className="invisible hidden sm:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden sm:block" size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <BeadsFillRight />
      </BeadsFlexContainer>
      <BeadsFlexContainer className=" gap-4 md:gap-8">
        <Bead className="hidden xs:block" size={'defaultShrinkable'} />
        <Bead className="hidden xl:block" size={'defaultShrinkable'} />
        <Bead className="hidden xl:block" size={'defaultShrinkable'} />
        <BeadsTextContainer className="block pl-2 xs:hidden" containerWidthInBeeds={2} text={heroDescription} />
        <BeadsTextContainer className="-mr-8 hidden xs:block md:hidden" containerWidthInBeeds={3} text={heroDescription} />
        <BeadsTextContainer className="-mr-12 hidden pl-2 md:block lg:hidden" containerWidthInBeeds={4} text={heroDescription} />
        <BeadsTextContainer className="hidden pl-2 lg:block" containerWidthInBeeds={5} text={heroDescription} />
        <Bead className="invisible hidden xl:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden xl:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden 2xl:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden 2xl:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden 3xl:block" size={'defaultShrinkable'} />
        <BeadsFillRight />
      </BeadsFlexContainer>
      <BeadsFlexContainer className=" gap-4 md:gap-8">
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead className="hidden lg:block" size={'defaultShrinkable'} />
        <Bead className="hidden lg:block" size={'defaultShrinkable'} />
        <Bead className="hidden xl:block" size={'defaultShrinkable'} />
        <Bead className="hidden 2xl:block" size={'defaultShrinkable'} />
        <Bead className="invisible block sm:hidden" size={'defaultShrinkable'} />
        <Bead className="invisible block sm:hidden" size={'defaultShrinkable'} />
        <Bead className="invisible hidden md:block lg:hidden" size={'defaultShrinkable'} />
        <Bead className="invisible hidden md:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden lg:block" size={'defaultShrinkable'} />
        <Bead className="invisible hidden lg:block" size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <Bead size={'defaultShrinkable'} />
        <BeadsFillRight />
      </BeadsFlexContainer>
    </>
  );
};

const Memo = memo(LandingBeadsSectionContent);
export { Memo as LandingBeadsSectionContent };
