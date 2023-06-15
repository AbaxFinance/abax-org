import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Beads, BeadsFlexContainer, BeadsSlideInContainer, BeadsTextContainer } from '@/components/ui/BeadsWithText';
import { RoadmapCircleEmpty } from '@/components/ui/RoadmapCircleEmpty';
import { RoadmapCircleFilled } from '@/components/ui/RoadmapCircleFilled';
import { RoadmapLine } from '@/components/ui/RoadmapLine';
import { SectionHorizontalDivider } from '@/components/ui/SectionHorizontalDivider';
import { SectionTitleIcon } from '@/components/ui/SectionTitleIcon';
import { SectionVerticalDivider } from '@/components/ui/SectionVerticalDivider';
import { SectionVerticalDividerAccent } from '@/components/ui/SectionVerticalDividerAccent';
import { SectionVerticalDividerLong } from '@/components/ui/SectionVerticalDividerLong';
import { TextColorTransition } from '@/components/ui/TextColorTransition';
import { TextWithColorChangeOnViewportOverlap } from '@/components/ui/TextWithColorChangeOnViewportOverlap';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 overflow-hidden bg-black text-white">
      <Header />
      <section className="-ml-6 flex w-[200%] flex-col gap-8 overflow-x-hidden pb-12">
        <BeadsFlexContainer>
          <Beads numberOfBeeds={7} />
          <BeadsTextContainer
            containerWidthInBeeds={2}
            text={
              <h2 className="-mt-2 flex h-full items-center justify-center text-left text-5xl font-light leading-[4rem] tracking-tight">
                Abax
                <br />
                Protocol
              </h2>
            }
          />
          <Beads numberOfBeeds={14} />
        </BeadsFlexContainer>
        <BeadsFlexContainer>
          <Beads numberOfBeeds={2} />
          <BeadsTextContainer
            containerWidthInBeeds={5}
            text={
              <h3 className="-mt-2 flex h-full items-center justify-center whitespace-pre-wrap p-8 text-left text-xl font-normal leading-10 tracking-tight">
                {`With fair interest rates and high security,\n you can grow your capital with Abax both \n as a lender as well as a borrower.`}
              </h3>
            }
          />
          <Beads numberOfBeeds={14} />
        </BeadsFlexContainer>
        <BeadsFlexContainer>
          <Beads fullRow />
        </BeadsFlexContainer>
        <></>
      </section>
      <section className="flex h-full w-full flex-col gap-10 rounded-[4rem] bg-white px-60 py-40 text-black">
        <h4 className="flex gap-1 leading-5">
          <SectionTitleIcon className="h-4 w-4 overflow-visible" />
          <span>Shape Abax with us!</span>
        </h4>
        <div className="mb-32 text-6xl leading-[4rem] tracking-tight">
          <span className="text-black">{`Join the Abax Discourse `}</span>
          <TextColorTransition
            text={`where you can shape the future of lending in the Aleph Zero ecosystem.\n
          Participate in the development of tokenomics, governance processes of the DAO, by sharing your meaningful ideas.\n
          Become one of the earliest contributors to the project that values your input and rewards you for your efforts.`}
            fromColor="#CCCCCC"
            toColor="black"
          />
        </div>
        <div className="flex gap-10">
          <div className="flex h-[32rem] w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-12 transition-transform duration-300 hover:scale-105">
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
          <div className="flex h-[32rem] w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-12 transition-transform duration-300 hover:scale-105">
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
          <div className="flex h-[32rem] w-full flex-col gap-5 rounded-3xl bg-[#f3f3f3] p-12 transition-transform duration-300 hover:scale-105">
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
      <section className="flex h-full w-full flex-col gap-10 rounded-[4rem] bg-black pt-40 text-white">
        <section className="flex flex-col justify-center gap-5">
          <h4 className="flex justify-center gap-1 leading-5">
            <SectionTitleIcon className="h-4 w-4 overflow-visible" />
            <span>Features</span>
          </h4>
          <h5 className="mb-32 text-center text-4xl">Making The Decentralized Lending Even Better</h5>
          <div className="flex w-full flex-col gap-8 overflow-x-hidden">
            <BeadsFlexContainer>
              <Beads beadSizeVariant={'lg'} numberOfBeeds={5} />
              <BeadsTextContainer
                beadSizeVariant={'lg'}
                containerWidthInBeeds={5}
                text={
                  <section className="flex h-full flex-col items-start justify-center gap-4 text-left">
                    <h3 className="whitespace-pre-wrap text-3xl">{`Innovative Position\nRisk Model`}</h3>
                    <div className="max-w-md text-[#9D9D9D]">
                      Abax Protocol calculates the maximum debt for each user`s based on users collaterals and debts that built position. Each asset
                      contributes differently to the position depending on it`s volatitlity...{' '}
                      <Link
                        href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white">
                        Read more
                      </Link>
                    </div>
                  </section>
                }
              />
              <Beads beadSizeVariant={'lg'} beadVariant={'ghost'} numberOfBeeds={4} />
            </BeadsFlexContainer>
            <BeadsFlexContainer>
              <Beads beadSizeVariant={'lg'} numberOfBeeds={3} />
              <BeadsTextContainer text={''} beadSizeVariant={'lg'} containerWidthInBeeds={2} />
              <BeadsSlideInContainer
                beadSizeVariant={'lg'}
                containerWidthInBeeds={3}
                numberOfBeadsToSlide={2}
                text={
                  <section className="flex h-full flex-col items-start justify-center gap-4 text-left">
                    <h3 className="whitespace-pre-wrap text-3xl">{`Transparency`}</h3>
                    <div className="max-w-md text-[#9D9D9D]">
                      Abax Protocol is built with transparency at its core. Our public code of the smart contracts are auditable by anyone, at any
                      time. With Abax Protocol, you can have...{' '}
                      <Link
                        href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white">
                        Read more
                      </Link>
                    </div>
                  </section>
                }
              />
              <Beads beadSizeVariant={'lg'} beadVariant={'ghost'} numberOfBeeds={4} />
            </BeadsFlexContainer>
            <BeadsFlexContainer>
              <Beads beadSizeVariant={'lg'} numberOfBeeds={4} />
              <BeadsTextContainer text={''} beadSizeVariant={'lg'} containerWidthInBeeds={2} />
              <BeadsSlideInContainer
                beadSizeVariant={'lg'}
                containerWidthInBeeds={3}
                numberOfBeadsToSlide={2}
                text={
                  <section className="flex h-full flex-col items-start justify-center gap-4 text-left">
                    <h3 className="whitespace-pre-wrap text-3xl">{`Fair Interest\nRate Model`}</h3>
                    <div className="max-w-md text-[#9D9D9D]">
                      Abax Protocol uses a dynamic interest rate model that adjusts based on market demand, ensuring fair and competitive rates for
                      users. Our flexible model maximizes...
                      <Link
                        href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white">
                        Read more
                      </Link>
                    </div>
                  </section>
                }
              />
              <Beads beadSizeVariant={'lg'} beadVariant={'ghost'} numberOfBeeds={5} />
            </BeadsFlexContainer>
          </div>
        </section>
        <section className="flex h-full w-full flex-col gap-20 px-60 py-40">
          <h4 className="flex gap-1 leading-5">
            <SectionTitleIcon className="h-4 w-4 overflow-visible" />
            <span>A powerful protocol</span>
          </h4>
          <div className="flex flex-col gap-14">
            <div className="flex justify-between">
              <h3 className="max-w-xs whitespace-pre-wrap text-3xl">Regulatory Compliance</h3>
              <TextWithColorChangeOnViewportOverlap
                text={
                  'Compliance with relevant regulations is a key goal of our Abax community. With a focus on compliance and transparency, we aim to establish ourselves as a trustworthy and reliable partner for both lenders and borrowers.'
                }
                fromColor="#9D9D9D"
                toColor="#E0E0E0"
              />
            </div>
            <SectionHorizontalDivider />
            <div className="flex justify-between">
              <h3 className="max-w-xs whitespace-pre-wrap text-3xl">User Interface tailored to your needs</h3>
              <TextWithColorChangeOnViewportOverlap
                text={
                  'Whether you`re an experienced blockchain user or new to the technology, the Abax App provides an intuitive and user-friendly way to utilize all the features of our platform.'
                }
                fromColor="#9D9D9D"
                toColor="#E0E0E0"
              />
            </div>
            <SectionHorizontalDivider />
            <div className="flex justify-between">
              <h3 className="max-w-xs whitespace-pre-wrap text-3xl">Cross-chain Compatibility</h3>
              <TextWithColorChangeOnViewportOverlap
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
  );
}

function RoadmapSection() {
  return (
    <section className="overflow-hidden">
      <div className="flex h-full w-full flex-col gap-20 px-60 pb-6 pt-20">
        <h4 className="flex gap-1 leading-5">
          <SectionTitleIcon className="h-4 w-4 overflow-visible" />
          <span>Roadmap</span>
        </h4>
        <div className="flex w-full justify-center">
          <div className="relative">
            <SectionVerticalDividerLong className="absolute w-px" />
            <SectionVerticalDividerAccent className="absolute top-0 h-1/2 w-[2px]" />
            <RoadmapCircleFilled className="absolute -left-[10px] z-10 h-5 w-5" style={{ top: 'calc(100% + 166px)' }} />
          </div>
          <div className="ml-10 flex w-full flex-col gap-8 text-sm">
            <div className="text-2xl">Phase 1</div>
            <div className="flex flex-col gap-4">
              <div className="">Converge on the vision of the DAO</div>
              <div className="ml-4 text-[#9D9D9D]">
                <div className="">Governance processes</div>
                <div className="">Tokenomics</div>
              </div>
              <div className="">Switch to the on-chain governance</div>
              <div className="">Launch protocol demo on the testnet</div>
            </div>
          </div>
          <div className="relative">
            <SectionVerticalDivider className="h-96 w-px" />
            <RoadmapCircleEmpty className="absolute -left-[10px] z-10 h-5 w-5 rounded-full" style={{ top: 'calc(100% + 14px)' }} />
          </div>
          <div className="ml-10 flex w-full flex-col gap-8 text-sm text-[#9D9D9D]">
            <div className="text-2xl">Phase 2</div>
            <div className="flex flex-col gap-4">
              <div className="">Converge on the vision of the DAO</div>
              <div className="">
                <div className="">Governance processes</div>
                <div className="">Tokenomics</div>
              </div>
              <div className="">Switch to the on-chain governance</div>
              <div className="">Launch protocol demo on the testnet</div>
            </div>
          </div>
          <div className="relative">
            <SectionVerticalDivider className="h-96 w-px" />
            <RoadmapCircleEmpty className="absolute -left-[10px] z-10 h-5 w-5 rounded-full" style={{ top: 'calc(100% + 14px)' }} />
          </div>
          <div className="ml-10 flex w-full flex-col gap-8 text-sm text-[#9D9D9D]">
            <div className="text-2xl">Phase 3</div>
            <div className="flex flex-col gap-4">
              <div className="">Converge on the vision of the DAO</div>
              <div className="">
                <div className="">Governance processes</div>
                <div className="">Tokenomics</div>
              </div>
              <div className="">Switch to the on-chain governance</div>
              <div className="">Launch protocol demo on the testnet</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-72">
        <RoadmapLine className="w-[2646px] overflow-visible" />
      </div>
    </section>
  );
}
