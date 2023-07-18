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
        <Beads beadSizeVariant={isMobileView ? 'sm' : 'default'} numberOfBeeds={isMobileView ? 1 : Math.max(0, 8 - amountOfBeedsToSubtractByWidth)} />
        <BeadsTextContainer
          beadSizeVariant={isMobileView ? 'sm' : 'default'}
          containerWidthInBeeds={2}
          text={
            <div className="flex h-full items-center justify-center text-left text-4xl font-normal leading-[3rem] tracking-tight lg:-mt-2 lg:text-5xl lg:leading-[4rem]">
              Abax
              <br />
              Protocol
            </div>
          }
        />
        <Beads beadSizeVariant={isMobileView ? 'sm' : 'default'} numberOfBeeds={14} />
      </BeadsFlexContainer>
      {isMobileView && (
        <BeadsFlexContainer>
          <Beads beadSizeVariant={isMobileView ? 'sm' : 'default'} numberOfBeeds={2} />
          {isMobileView && <BeadsTextContainer beadSizeVariant={isMobileView ? 'sm' : 'default'} containerWidthInBeeds={1} text={''} />}
          <Beads beadSizeVariant={isMobileView ? 'sm' : 'default'} numberOfBeeds={13} />
        </BeadsFlexContainer>
      )}
      <BeadsFlexContainer>
        {isMobileView ? null : <Beads numberOfBeeds={Math.max(1, 3 - amountOfBeedsToSubtractByWidth)} />}
        <BeadsTextContainer
          beadSizeVariant={isMobileView ? 'sm' : 'default'}
          containerWidthInBeeds={isMobileView ? 4 : Math.max(0, 10 - amountOfBeedsToSubtractByWidth)}
          text={
            <h3 className="flex h-full items-center whitespace-pre-wrap p-4 text-left text-sm font-normal leading-10 tracking-tight lg:-mt-2 lg:p-8 lg:pl-24 lg:text-xl">
              {`With fair interest rates and high security,\n you can grow your capital with Abax both \n as a lender as well as a borrower.`}
            </h3>
          }
        />
        <Beads beadSizeVariant={isMobileView ? 'sm' : 'default'} numberOfBeeds={14} />
      </BeadsFlexContainer>
      {isMobileView ? (
        <BeadsFlexContainer>
          <Beads beadSizeVariant="sm" numberOfBeeds={1} />
          <BeadsTextContainer beadSizeVariant="sm" containerWidthInBeeds={1} text={''} />
          <Beads beadSizeVariant="sm" numberOfBeeds={8} />
        </BeadsFlexContainer>
      ) : (
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
