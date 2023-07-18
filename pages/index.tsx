import { FeaturesSection } from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LandingBeadsSectionContent } from '@/components/LandingBeadsSectionContent';
import { RoadmapSection } from '@/components/RoadmapSection';
import { SectionHorizontalDivider } from '@/components/ui/SectionHorizontalDivider';
import { SectionTitleIcon } from '@/components/ui/SectionTitleIcon';
import { TextColorTransition } from '@/components/ui/TextColorTransition';
import { TextWithColorChangeOnViewportOverlap } from '@/components/ui/TextWithColorChangeOnViewportOverlap';
import { getIsSsrMobile } from '@/lib/ssrUtils';
import { MoveUpRight } from 'lucide-react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div className="text-3xl">LOADING</div>}>
      <main className="w- flex min-h-screen flex-col gap-2 overflow-hidden bg-black text-white lg:gap-4">
        <Header />
        <section className="-ml-3 flex w-[200%] flex-col gap-4 overflow-x-hidden pb-4 sm:pb-20 lg:-ml-6 lg:gap-8">
          <LandingBeadsSectionContent />
        </section>
        <section className="flex h-full w-full flex-col gap-6 rounded-t-[3rem] bg-white px-8 py-20 pb-40 text-black lg:gap-10 lg:rounded-t-[4rem] lg:px-40 lg:py-40 2xl:px-60">
          <h4 className="flex gap-1 leading-5">
            <SectionTitleIcon className="h-4 w-4 overflow-visible" />
            <span>Shape Abax with us!</span>
          </h4>
          <div className="mb-20 whitespace-pre-line text-xl leading-8 tracking-tight lg:mb-32 lg:text-4xl lg:leading-[3rem] xl:text-6xl xl:leading-[4rem]">
            <span className="text-black">{`Join the Abax Discourse`}</span>
            <TextColorTransition
              text={`
- Shape the future of lending in the Aleph Zero ecosystem.
- Participate in the development of tokenomics, governance processes of the DAO, by sharing your meaningful ideas.
- Become one of the earliest contributors to the project that values your input and rewards you for your efforts.`}
              fromColor="#CCCCCC"
              toColor="black"
            />
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex h-96 w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-8 transition-transform duration-300 hover:scale-105 lg:h-[32rem] lg:p-12">
              <h5 className="text-4xl">Whitepaper</h5>
              <div>Read the document and undestand the core concept of Abax.</div>
              <Link
                href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:scale-105 ">
                <MoveUpRight className="h-5 w-5 transition-all group-hover:-translate-y-1/2 group-hover:translate-x-1/2  group-hover:scale-105 group-hover:animate-translate-xy" />
              </Link>
            </div>
            <div className="flex h-96 w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-8 transition-transform duration-300 hover:scale-105 lg:h-[32rem] lg:p-12">
              <h5 className="text-4xl">Governance Forum</h5>
              <div>Participate by proposing upgrades and discussing the future of the protocol with the Abax community.</div>
              <Link
                href="https://gov.abax.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:scale-105">
                <MoveUpRight className="h-5 w-5 transition-all group-hover:-translate-y-1/2 group-hover:translate-x-1/2  group-hover:scale-105 group-hover:animate-translate-xy" />
              </Link>
            </div>
            <div className="flex h-96 w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-8 transition-transform duration-300 hover:scale-105 lg:h-[32rem] lg:p-12">
              <h5 className="text-4xl">Abax Token</h5>
              <div>Read and discuss the DAO token tokenomics proposal.</div>
              <Link
                href="https://gov.abax.finance/t/abax-the-dao-token-tokenomics/42"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:scale-105">
                <MoveUpRight className="h-5 w-5 transition-all group-hover:-translate-y-1/2 group-hover:translate-x-1/2  group-hover:scale-105 group-hover:animate-translate-xy" />
              </Link>
            </div>
          </div>
          <></>
        </section>
        <section className="z-10 -mt-20 flex h-full w-full flex-col gap-10 rounded-t-[3rem] bg-black pt-20 text-white lg:rounded-t-[4rem] lg:pt-40">
          <FeaturesSection />
          <section className="flex h-full w-full flex-col gap-10 px-5 pt-20 lg:gap-20 lg:px-40 lg:py-40 2xl:px-60">
            <h4 className="flex gap-1 leading-5">
              <SectionTitleIcon className="h-4 w-4 overflow-visible" />
              <span>A powerful protocol</span>
            </h4>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col justify-between gap-4 lg:flex-row ">
                <h3 className="max-w-xs whitespace-pre-wrap text-3xl">Regulatory Compliance</h3>
                <TextWithColorChangeOnViewportOverlap className="max-w-lg xl:max-w-xl 2xl:max-w-2xl" fromColor="#9D9D9D" toColor="#E0E0E0">
                  {
                    'Compliance with relevant regulations is a key goal of the Abax community. With a focus on compliance and transparency, we aim to establish ourselves as a trustworthy and reliable partner for both lenders and borrowers.'
                  }
                </TextWithColorChangeOnViewportOverlap>
              </div>
              <SectionHorizontalDivider className="h-[2px] w-full" />
              <div className="flex flex-col justify-between gap-4 lg:flex-row ">
                <h3 className="max-w-xs whitespace-pre-wrap text-3xl">User Interface tailored to your needs</h3>
                <TextWithColorChangeOnViewportOverlap className="max-w-lg xl:max-w-xl 2xl:max-w-2xl" fromColor="#9D9D9D" toColor="#E0E0E0">
                  {
                    'Whether you`re an experienced blockchain user or new to the technology, the Abax App provides an intuitive and user-friendly way to utilize all the features of the platform.'
                  }
                </TextWithColorChangeOnViewportOverlap>
              </div>
              <SectionHorizontalDivider className="h-[2px] w-full" />
              <div className="flex flex-col justify-between gap-4 lg:flex-row ">
                <h3 className="max-w-xs whitespace-pre-wrap text-3xl">Cross-chain Compatibility</h3>
                <TextWithColorChangeOnViewportOverlap className="max-w-lg xl:max-w-xl 2xl:max-w-2xl" fromColor="#9D9D9D" toColor="#E0E0E0">
                  {
                    'The protocol is built on Aleph Zero and will allow for cross-chain compatibility once Aleph Zero bridges to Polkadot and other ecosystems.'
                  }
                </TextWithColorChangeOnViewportOverlap>
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
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  };
}
