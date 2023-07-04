'use client';
import { Beads, BeadsFlexContainer, BeadsTextContainer } from '@/components/ui/BeadsWithText';
import { useIsMobile, useWindowDimensions } from '@/lib/clientUtils';
import { FC, memo } from 'react';
const getAmountOfBeedsToSubtractByWidth = (width: number) => {
  if (0 <= width && width < 640) {
    return 0;
  }
  if (640 <= width && width < 768) {
    return 4;
  }
  if (768 <= width && width < 1024) {
    return 4;
  }
  if (1024 <= width && width < 1280) {
    return 3;
  }
  if (1280 <= width && width < 1464) {
    return 2;
  }
  if (1464 <= width && width < 1536) {
    return 1;
  }
  if (1536 <= width && width < 1792) {
    return 1;
  }
  if (1792 <= width) {
    return 0;
  }

  return 0;
};

const LandingBeadsSectionContent: FC = () => {
  const isMobileView = useIsMobile();
  const dimensions = useWindowDimensions();
  const amountOfBeedsToSubtractByWidth = getAmountOfBeedsToSubtractByWidth(dimensions.width);
  return (
    <>
      <BeadsFlexContainer>
        <Beads numberOfBeeds={isMobileView ? 1 : Math.max(0, 8 - amountOfBeedsToSubtractByWidth)} />
        <BeadsTextContainer
          containerWidthInBeeds={2}
          text={
            <div className="-mt-2 flex h-full items-center justify-center text-left text-5xl font-normal leading-[4rem] tracking-tight lg:text-5xl">
              Abax
              <br />
              Protocol
            </div>
          }
        />
        <Beads numberOfBeeds={14} />
      </BeadsFlexContainer>
      {isMobileView && (
        <BeadsFlexContainer>
          <Beads numberOfBeeds={14} />
        </BeadsFlexContainer>
      )}
      <BeadsFlexContainer>
        {isMobileView ? null : <Beads numberOfBeeds={Math.max(0, 3 - amountOfBeedsToSubtractByWidth)} />}
        <BeadsTextContainer
          containerWidthInBeeds={isMobileView ? 3 : 8}
          text={
            <h3 className="-mt-2 flex h-full items-center whitespace-pre-wrap p-8 text-left text-sm font-normal leading-10 tracking-tight lg:pl-24 lg:text-xl">
              {`With fair interest rates and high security,\n you can grow your capital with Abax both \n as a lender as well as a borrower.`}
            </h3>
          }
        />
        <Beads numberOfBeeds={14} />
      </BeadsFlexContainer>
      {isMobileView ? null : (
        <BeadsFlexContainer>
          <Beads numberOfBeeds={Math.max(0, 5 - amountOfBeedsToSubtractByWidth)} />
          <BeadsTextContainer containerWidthInBeeds={4} text={''} />
          <Beads numberOfBeeds={14} />
        </BeadsFlexContainer>
      )}
    </>
  );
};

const Memo = memo(LandingBeadsSectionContent);
export { Memo as LandingBeadsSectionContent };
