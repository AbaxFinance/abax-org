'use client';
import { Beads, BeadsFlexContainer, BeadsSlideInContainer, BeadsTextContainer } from '@/components/ui/BeadsWithText';
import { SectionTitleIcon } from '@/components/ui/SectionTitleIcon';
import { useIsMobile, useWindowDimensions } from '@/lib/clientUtils';
import Link from 'next/link';
import { FC, memo } from 'react';

export const getAmountOfBeedsToSubtractByWidth = (width: number) => {
  if (0 <= width && width < 640) {
    return 0;
  }
  if (640 <= width && width < 768) {
    return 4;
  }
  if (768 <= width && width < 1024) {
    return 3;
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

const FeaturesSection: FC = () => {
  const isMobileView = useIsMobile();
  const dimensions = useWindowDimensions();

  const amountOfBeedsToSubtract = getAmountOfBeedsToSubtractByWidth(dimensions.width);

  return (
    <section className="flex flex-col justify-center gap-5">
      <h4 className="flex justify-center gap-1 leading-5">
        <SectionTitleIcon className="h-4 w-4 overflow-visible" />
        <span>Features</span>
      </h4>
      <h5 className="mb-12 text-center text-2xl lg:mb-24 lg:text-4xl">Making Decentralized Lending Even Better</h5>
      <div className="flex w-full flex-col gap-8 overflow-x-hidden">
        <BeadsFlexContainer className="-ml-8 gap-4 lg:ml-4 lg:gap-8">
          {isMobileView ? null : <Beads beadSizeVariant={'lg'} numberOfBeeds={amountOfBeedsToSubtract === 3 ? 3 : 5 - amountOfBeedsToSubtract} />}
          {isMobileView && <Beads beadSizeVariant={'default'} numberOfBeeds={1} />}
          <BeadsTextContainer
            beadSizeVariant={isMobileView ? 'default' : 'lg'}
            containerWidthInBeeds={
              isMobileView ? null : amountOfBeedsToSubtract === 2 ? 4 : amountOfBeedsToSubtract === 3 ? 2 : 5 - amountOfBeedsToSubtract
            }
            text={
              <section className="flex h-full flex-col items-start justify-center gap-2 text-left lg:gap-4">
                <h3 className="whitespace-pre-wrap text-2xl lg:text-3xl ">{`Innovative Position\nRisk Model`}</h3>
                <div className="max-w-md text-sm text-[#9D9D9D] lg:text-base">
                  <span className="line-clamp-3 lg:line-clamp-none lg:inline">
                    Abax Protocol calculates the maximum debt for each user`s based on users collaterals and debts that built position. Each asset
                    contributes differently to the position depending on it`s volatitlity...{' '}
                  </span>
                  <Link
                    href="https://docs.abax.finance/lending-protocol/collateral-and-borrowing/health-factor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline text-white">
                    Read more
                  </Link>
                </div>
              </section>
            }
          />
          {amountOfBeedsToSubtract === 3 ? <BeadsTextContainer text={''} beadSizeVariant={'lg'} containerWidthInBeeds={1} /> : null}
          {isMobileView ? null : <Beads beadSizeVariant={'lg'} beadVariant={'ghost'} numberOfBeeds={4} />}
        </BeadsFlexContainer>
        <BeadsFlexContainer className="-ml-8 gap-4 lg:ml-4 lg:gap-8">
          {isMobileView ? null : <Beads beadSizeVariant={'lg'} numberOfBeeds={amountOfBeedsToSubtract === 3 ? 1 : 3 - amountOfBeedsToSubtract} />}
          {isMobileView ? null : (
            <BeadsTextContainer
              text={''}
              beadSizeVariant={'lg'}
              containerWidthInBeeds={amountOfBeedsToSubtract === 3 || amountOfBeedsToSubtract === 1 || amountOfBeedsToSubtract === 2 ? 1 : 2}
            />
          )}
          <BeadsSlideInContainer
            animateVertically={isMobileView}
            beadSizeVariant={isMobileView ? 'default' : 'lg'}
            containerWidthInBeeds={isMobileView ? null : amountOfBeedsToSubtract === 3 ? 2 : 3}
            numberOfBeadsToSlide={amountOfBeedsToSubtract === 3 || amountOfBeedsToSubtract === 1 || amountOfBeedsToSubtract === 2 ? 1 : 2}
            text={
              <section className="flex h-full flex-col items-start justify-center gap-2 text-left lg:gap-4">
                <h3 className="whitespace-pre-wrap text-2xl lg:text-3xl ">{`Flexible Borrowing Rules`}</h3>
                <div className="max-w-md text-sm text-[#9D9D9D] lg:text-base">
                  <span className="line-clamp-3 lg:line-clamp-none lg:inline">
                    Abax is highly customizable at its core. To create the best borrowing experience possible it allows borrowers to choose from many
                    Market Rules. The Market Rules regulate the way which assets can be borrowed and how...{' '}
                  </span>
                  <Link
                    href="https://docs.abax.finance/lending-protocol/collateral-and-borrowing/market-rules"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline text-white">
                    Read more
                  </Link>
                </div>
              </section>
            }
          />
          {isMobileView ? null : <Beads beadSizeVariant={'lg'} beadVariant={'ghost'} numberOfBeeds={4} />}
        </BeadsFlexContainer>
        <BeadsFlexContainer className="-ml-8 gap-4 lg:ml-4 lg:gap-8">
          {isMobileView ? null : <Beads beadSizeVariant={'lg'} numberOfBeeds={amountOfBeedsToSubtract === 3 ? 2 : 4 - amountOfBeedsToSubtract} />}
          {isMobileView ? null : (
            <BeadsTextContainer
              text={''}
              beadSizeVariant={'lg'}
              containerWidthInBeeds={amountOfBeedsToSubtract === 3 || amountOfBeedsToSubtract === 1 || amountOfBeedsToSubtract === 2 ? 1 : 2}
            />
          )}
          <BeadsSlideInContainer
            animateVertically={isMobileView}
            beadSizeVariant={isMobileView ? 'default' : 'lg'}
            containerWidthInBeeds={isMobileView ? null : amountOfBeedsToSubtract === 3 ? 2 : 3}
            numberOfBeadsToSlide={amountOfBeedsToSubtract === 3 || amountOfBeedsToSubtract === 1 || amountOfBeedsToSubtract === 2 ? 1 : 2}
            text={
              <section className="flex h-full flex-col items-start justify-center gap-2 text-left lg:gap-4">
                <h3 className="whitespace-pre-wrap text-2xl lg:text-3xl ">{`Fair Interest\nRate Model`}</h3>
                <div className="max-w-md text-sm text-[#9D9D9D] lg:text-base">
                  <span className="line-clamp-3 lg:line-clamp-none lg:inline">
                    Abax Protocol uses a dynamic interest rate model that adjusts based on market demand, ensuring fair and competitive rates for
                    users. Its flexible model maximizes...
                  </span>
                  <Link
                    href="https://docs.abax.finance/lending-protocol/collateral-and-borrowing/interest-rate-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline text-white">
                    Read more
                  </Link>
                </div>
              </section>
            }
          />
          {isMobileView ? null : <Beads beadSizeVariant={'lg'} beadVariant={'ghost'} numberOfBeeds={4} />}
        </BeadsFlexContainer>
      </div>
    </section>
  );
};

const Memo = memo(FeaturesSection);

export { Memo as FeaturesSection };
