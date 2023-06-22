import { FeaturesSection } from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LandingBeadsSectionContent } from '@/components/LandingBeadsSectionContent';
import { RoadmapCircleEmpty } from '@/components/ui/RoadmapCircleEmpty';
import { RoadmapCircleFilled } from '@/components/ui/RoadmapCircleFilled';
import { RoadmapLine } from '@/components/ui/RoadmapLine';
import { RoadmapLineMobile } from '@/components/ui/RoadmapLineMobile';
import { SectionHorizontalDivider } from '@/components/ui/SectionHorizontalDivider';
import { SectionTitleIcon } from '@/components/ui/SectionTitleIcon';
import { SectionVerticalDivider } from '@/components/ui/SectionVerticalDivider';
import { SectionVerticalDividerAccent } from '@/components/ui/SectionVerticalDividerAccent';
import { SectionVerticalDividerLong } from '@/components/ui/SectionVerticalDividerLong';
import { TextColorTransition } from '@/components/ui/TextColorTransition';
import { TextWithColorChangeOnViewportOverlap } from '@/components/ui/TextWithColorChangeOnViewportOverlap';
import { useIsMobile } from '@/lib/clientUtils';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  const isMobile = useIsMobile();
  console.log({ isMobile });
  return (
    <Suspense fallback={<div className="text-3xl">LOADING</div>}>
      <main className="w- flex min-h-screen flex-col gap-2 overflow-hidden bg-black text-white lg:gap-4">
        <Header />
        <section className="-ml-6 flex w-[200%] flex-col gap-8 overflow-x-hidden pb-12">
          <LandingBeadsSectionContent />
        </section>
        <section className="flex h-full w-full flex-col gap-6 rounded-t-[3rem] bg-white px-8 py-20 pb-40 text-black lg:gap-10 lg:rounded-t-[4rem] lg:px-40 lg:py-40 2xl:px-60">
          <h4 className="flex gap-1 leading-5">
            <SectionTitleIcon className="h-4 w-4 overflow-visible" />
            <span>Shape Abax with us!</span>
          </h4>
          <div className="mb-20 text-2xl leading-[4rem] tracking-tight lg:mb-32 lg:text-4xl xl:text-6xl">
            <span className="text-black">{`Join the Abax Discourse `}</span>
            <TextColorTransition
              text={`where you can shape the future of lending in the Aleph Zero ecosystem.\n
          Participate in the development of tokenomics, governance processes of the DAO, by sharing your meaningful ideas.\n
          Become one of the earliest contributors to the project that values your input and rewards you for your efforts.`}
              fromColor="#CCCCCC"
              toColor="black"
            />
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex h-96 w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-8 transition-transform duration-300 hover:scale-105 lg:h-[32rem] lg:p-12">
              <h5 className="text-4xl">Whitepaper</h5>
              <div>Read the document and undestand the core concept of Abax</div>
              <Link
                href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:scale-105">
                <MoveUpRight className="h-5 w-5 transition-all hover:-translate-y-1/4 hover:translate-x-1/4" />
              </Link>
            </div>
            <div className="flex h-96 w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-8 transition-transform duration-300 hover:scale-105 lg:h-[32rem] lg:p-12">
              <h5 className="text-4xl">Governance Forum</h5>
              <div>Participate by proposing upgrades and discussing the future of the protocol with the Abax community.</div>
              <Link
                href="https://gov.abax.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:scale-105">
                <MoveUpRight className="h-5 w-5 transition-all hover:-translate-y-1/4 hover:translate-x-1/4" />
              </Link>
            </div>
            <div className="flex h-96 w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-8 transition-transform duration-300 hover:scale-105 lg:h-[32rem] lg:p-12">
              <h5 className="text-4xl">Abax Token</h5>
              <div>Read and discuss the DAO token tokenomics proposal</div>
              <Link
                href="https://gov.abax.finance/t/abax-the-dao-token-tokenomics/42"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:scale-105">
                <MoveUpRight className="h-5 w-5 transition-all hover:-translate-y-1/4 hover:translate-x-1/4" />
              </Link>
            </div>
          </div>
          <></>
        </section>
        <section className="z-10 -mt-20 flex h-full w-full flex-col gap-10 rounded-t-[3rem] bg-black pt-20 text-white lg:rounded-t-[4rem] lg:pt-40">
          <FeaturesSection />
          <section className="flex h-full w-full flex-col gap-10 px-4 py-20 lg:gap-20 lg:px-40 lg:py-40 2xl:px-60">
            <h4 className="flex gap-1 leading-5">
              <SectionTitleIcon className="h-4 w-4 overflow-visible" />
              <span>A powerful protocol</span>
            </h4>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col justify-between gap-4 lg:flex-row ">
                <h3 className="max-w-xs whitespace-pre-wrap text-3xl">Regulatory Compliance</h3>
                <TextWithColorChangeOnViewportOverlap
                  className="max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                  text={
                    'Compliance with relevant regulations is a key goal of our Abax community. With a focus on compliance and transparency, we aim to establish ourselves as a trustworthy and reliable partner for both lenders and borrowers.'
                  }
                  fromColor="#9D9D9D"
                  toColor="#E0E0E0"
                />
              </div>
              <SectionHorizontalDivider />
              <div className="flex flex-col justify-between gap-4 lg:flex-row ">
                <h3 className="max-w-xs whitespace-pre-wrap text-3xl">User Interface tailored to your needs</h3>
                <TextWithColorChangeOnViewportOverlap
                  className="max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                  text={
                    'Whether you`re an experienced blockchain user or new to the technology, the Abax App provides an intuitive and user-friendly way to utilize all the features of our platform.'
                  }
                  fromColor="#9D9D9D"
                  toColor="#E0E0E0"
                />
              </div>
              <SectionHorizontalDivider />
              <div className="flex flex-col justify-between gap-4 lg:flex-row ">
                <h3 className="max-w-xs whitespace-pre-wrap text-3xl">Cross-chain Compatibility</h3>
                <TextWithColorChangeOnViewportOverlap
                  className="max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                  text={
                    'The protocol is built on Aleph Zero and will allow for cross-chain compatibility once Aleph Zero bridges to Polkadot and other ecosystems.'
                  }
                  fromColor="#9D9D9D"
                  toColor="#E0E0E0"
                />
              </div>
            </div>
          </section>
          <RoadmapSection />
        </section>
        <Footer />
      </main>
    </Suspense>
  );
}

function RoadmapSection() {
  return (
    <section className="overflow-hidden">
      <div className="lg:pr-30 relative flex h-full min-h-[900px] w-full flex-col px-8 pt-20 lg:min-h-[inherit] lg:gap-20 lg:px-40 lg:pb-6 xl:pr-40 2xl:px-60">
        <div className="absolute lg:relative lg:hidden">
          <RoadmapLineMobile className="-ml-8 h-[900px] overflow-visible" />
          <RoadmapCircleFilled className="absolute left-[42px] top-[128px] z-10 h-5 w-5" />
          <RoadmapCircleEmpty className="absolute left-[42px] top-[382px] z-10 h-5 w-5 rounded-full" />
          <RoadmapCircleEmpty className="absolute left-[42px] top-[578px] z-10 h-5 w-5 rounded-full min-[460px]:top-[556px]" />
        </div>
        <h4 className="flex w-full justify-center gap-1 pt-16 leading-5 lg:justify-start lg:pt-0">
          <SectionTitleIcon className="h-4 w-4 overflow-visible" />
          <span>Roadmap</span>
        </h4>
        <div className="flex grow flex-row lg:block">
          <div className="w-10 min-[460px]:w-16 lg:hidden" />
          <div className="flex w-full grow flex-col gap-20 pt-10 lg:flex-row lg:justify-center lg:gap-0 lg:pt-0">
            <div className="relative hidden lg:block">
              <SectionVerticalDividerLong className="absolute max-h-[448px] w-px lg:block xl:max-h-[410px] 2xl:max-h-[inherit]" />
              <SectionVerticalDividerAccent className="absolute top-0 h-1/2 w-[2px] lg:block" />
              <RoadmapCircleFilled className="absolute -left-[10px] top-[468px] z-10 h-5 w-5 2xl:top-[548px]" />
            </div>
            <div className=" ml-10 flex w-full flex-col gap-4 text-sm lg:gap-8 lg:pr-10">
              <div className="text-2xl">Phase 1</div>
              <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
                <div className="">Converge on the vision of the DAO</div>
                <div className="ml-4 text-[#9D9D9D]">
                  <div className="">Governance processes</div>
                  <div className="">Tokenomics</div>
                </div>
                <div className="">Switch to the on-chain governance</div>
                <div className="">Launch protocol demo on the testnet</div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <SectionVerticalDivider className="h-96 w-px lg:block" />
              <RoadmapCircleEmpty className="absolute -left-[10px] z-10 h-5 w-5 rounded-full" style={{ top: 'calc(100% + 14px)' }} />
            </div>
            <div className=" ml-10 flex w-full flex-col gap-4 text-sm text-[#9D9D9D] lg:gap-8 lg:pr-10">
              <div className="text-2xl">Phase 2</div>
              <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
                <div className="">Distribute DAO tokens to financial contributors</div>
                <div className="">Launch protocol on the mainnet</div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <SectionVerticalDivider className="h-96 w-px lg:block" />
              <RoadmapCircleEmpty className="absolute -left-[10px] z-10 h-5 w-5 rounded-full" style={{ top: 'calc(100% + 14px)' }} />
            </div>
            <div className="ml-10 flex w-full flex-col gap-4 text-sm text-[#9D9D9D] lg:gap-8">
              <div className="text-2xl">Phase 3</div>
              <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
                <div className="">Establish the foundation</div>
                <div className="">Further Improve Interest Rate Model</div>
                <div className="">Implement ideas issued by DAO</div>
                <div className="">...TBD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden h-72 lg:block 2xl:mt-0">
        <RoadmapLine className="-ml-32 w-[2246px] overflow-visible 2xl:-ml-0 2xl:w-[2646px]" />
      </div>
    </section>
  );
}
