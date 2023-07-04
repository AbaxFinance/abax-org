'use client';
import { Beads, BeadsFlexContainer, BeadsTextContainer } from '@/components/ui/BeadsWithText';
import { useIsMobile } from '@/lib/clientUtils';
import { FC, memo } from 'react';

const LandingBeadsSectionContent: FC = () => {
  const isMobileView = useIsMobile();
  return (
    <>
      <BeadsFlexContainer>
        <Beads numberOfBeeds={isMobileView ? 1 : 8} />
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
        {isMobileView ? null : <Beads numberOfBeeds={3} />}
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
          <Beads numberOfBeeds={6} />
          <BeadsTextContainer containerWidthInBeeds={3} text={''} />
          <Beads numberOfBeeds={14} />
        </BeadsFlexContainer>
      )}
    </>
  );
};

const Memo = memo(LandingBeadsSectionContent);
export { Memo as LandingBeadsSectionContent };
