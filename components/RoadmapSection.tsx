import { RoadmapCircleEmpty } from '@/components/ui/RoadmapCircleEmpty';
import { RoadmapCircleFilled } from '@/components/ui/RoadmapCircleFilled';
import { RoadmapLine } from '@/components/ui/RoadmapLine';
import { RoadmapLineMobile } from '@/components/ui/RoadmapLineMobile';
import { SectionTitleIcon } from '@/components/ui/SectionTitleIcon';
import { SectionVerticalDivider } from '@/components/ui/SectionVerticalDivider';
import { SectionVerticalDividerAccent } from '@/components/ui/SectionVerticalDividerAccent';
import { SectionVerticalDividerLong } from '@/components/ui/SectionVerticalDividerLong';

export function RoadmapSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative flex h-full w-full flex-col px-8 py-20 md:min-h-[700px] lg:min-h-[700px] lg:gap-20 lg:px-40 lg:pb-6 lg:pt-20 xl:pr-40 2xl:px-60">
        <div className="absolute h-[calc(100%-4rem)] lg:relative lg:hidden">
          <RoadmapLineMobile className="-ml-[346px] overflow-visible" />
          <RoadmapCircleFilled className="absolute left-[42px] top-[130px] z-10 h-4 w-4" />
          <RoadmapCircleEmpty className="absolute left-[42px] top-[524px] z-10 h-4 w-4 rounded-full" />
          <RoadmapCircleEmpty className="absolute left-[42px] top-[936px] z-10 h-4 w-4 rounded-full" />
        </div>
        <h4 className="flex w-full justify-center gap-1 pt-16 leading-5 lg:justify-start lg:pt-0">
          <SectionTitleIcon className="h-4 w-4 overflow-visible" />
          <span>Roadmap</span>
        </h4>
        <div className="flex grow flex-row lg:block">
          <div className="w-10 min-[460px]:w-16 lg:hidden" />
          <div className="flex w-full grow flex-col gap-20 pt-10 lg:min-h-[496px] lg:flex-row lg:justify-center lg:gap-0 lg:pt-0">
            <div className="relative hidden lg:block">
              <SectionVerticalDividerLong className="absolute h-[540px] w-px 2xl:h-max" />
              <SectionVerticalDividerAccent className="absolute top-0 h-1/3 w-[2px]" />
              <RoadmapCircleFilled className="absolute -bottom-[106px] -left-[10px] z-10 h-5 w-5 2xl:-bottom-[186px]" />
            </div>
            <div className="ml-8 flex min-h-[312px] w-full flex-col gap-4 pr-3 text-sm lg:pr-8">
              <div className="text-2xl">Phase 1</div>
              <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
                <div className="">Converge on the vision of the DAO</div>
                <ul className="ml-6 list-disc text-[#9D9D9D]">
                  <li>Design and agree on the governance processes</li>
                  <li>Design and agree on the tokenomics and initial distribution</li>
                </ul>
                <div className="">Present the product on testnet</div>
                <ul className="ml-6 list-disc text-[#9D9D9D]">
                  <li>Implement a web-app</li>
                  <li>Perform testing of the contracts and web-app</li>
                  <li>Release of the product on the testnet</li>
                </ul>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <SectionVerticalDivider className="h-full w-px pb-6 lg:block" />
              <RoadmapCircleEmpty className="absolute -left-[10px] z-10 h-5 w-5 rounded-full lg:-bottom-[34px]" />
            </div>
            <div className="ml-8 flex min-h-[332px] w-full flex-col gap-4 pr-3 text-sm text-[#9D9D9D] lg:pr-8">
              <div className="text-2xl">Phase 2</div>
              <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
                <div className="">Initialize the on-chain governance</div>
                <ul className="ml-6 list-disc text-[#9D9D9D]">
                  <li>Implement Governance Token contract</li>
                  <li>Implement Initial Distribution contract</li>
                  <li>Implement Governor contract</li>
                  <li>Audit Governor, Token, and Initial Distribution contracts</li>
                  <li>Perform initial contribution round</li>
                </ul>
                <div className="">Prepare product for the mainnet launch</div>
                <ul className="ml-6 list-disc text-[#9D9D9D]">
                  <li>Perform an Audit of Abax Lending Protocol</li>
                </ul>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <SectionVerticalDivider className="h-full w-px pb-6 lg:block" />
              <RoadmapCircleEmpty className="absolute -left-[10px] z-10 h-5 w-5 rounded-full lg:-bottom-[34px]" />
            </div>
            <div className="ml-8 flex min-h-[312px] w-full flex-col gap-4 pr-3 text-sm text-[#9D9D9D] md:pr-5 lg:pr-0">
              <div className="text-2xl">Phase 3</div>
              <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
                <div className="">Launch Abax Lending Protocol on mainnet</div>
                <ul className="ml-6 list-disc text-[#9D9D9D]">
                  <li>Deploy Lending Protocol as a DAO</li>
                  <li>Add assets to the lending protocol through the governance</li>
                  <li>Govern and Improve!</li>
                </ul>
                <div className="">Establish the foundation</div>
                <ul className="ml-6 list-disc text-[#9D9D9D]">
                  <li>Discuss registration details</li>
                  <li>Vote on the discussion outcomes through governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden h-72 lg:block">
        <RoadmapLine className="-ml-32 w-[2246px] overflow-visible 2xl:-ml-0 2xl:w-[2646px]" />
      </div>
    </section>
  );
}
