import React from 'react'
import styled from 'styled-components'
import BG from '../components/bg'
import { Button } from '../components/button'
import SEO from '../components/seo'
import { CardBGImage } from '../components/utils'
import { useDarkMode } from '../contexts/Application'
import Layout from '../layouts'

import GovImage from '../images/abax.banner.png'
import Discord from '../images/discord.inline.svg'
import Github from '../images/github.inline.svg'
import Twitter from '../images/twitter.inline.svg'
import Telegram from '../images/telegram.inline.svg'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/swiper.min.css'

import { Autoplay, Navigation, Pagination } from 'swiper'

const BGCard = styled.div`
  overflow: visible;
  position: absolute;
  width: 100%;
  height: 100vh;
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: overlay;

  @media (max-width: 960px) {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  height: 80vh;
  margin-bottom: 4rem;
`

const StyledBodyTitle = styled.h1`
  font-size: 56px;
  white-space: wrap;
  overflow-wrap: normal;
  @media (max-width: 1024px) {
    margin: 2rem 0 0rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`
const StyledBodySubTitle = styled.h2`
  max-width: 720px;
  line-height: 125%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`
const StyledBodyTitle2 = styled.h2`
  font-size: 34px;
  white-space: wrap;
  overflow-wrap: normal;
  font-weight: 400;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  @media (max-width: 1024px) {
    margin: 2rem 0 0rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 44px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 40px;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  line-height: 140%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 960px;
  line-height: 140%;
  font-size: 32px;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;
  .my-swiper {
    width: 100%;
  }

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;

  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledTelegram = styled(Telegram)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`
const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledTradeLink = styled.a`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  color: ${({ theme }) => theme.invertedTextColor};
  border-radius: 12px;
  display: inline-block;
  font-weight: 500;
  width: 100%;
  width: min-content;
  white-space: nowrap;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: none;

  :hover,
  :focus {
    border: 1px solid white;
  }
  @media (max-width: 960px) {
    display: inline-block;
  }
`
const IndexPage = props => {
  const isDark = useDarkMode()

  const mainHeaderText =
    'With fair interest rates and high security, you can grow your capital with Abax both as a lender as well as a borrower.'

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardBGImage isDark={isDark} />
      </BGCard>
      <SEO title="Home" path={props.location.pathname} description={mainHeaderText} />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontWeight: 200 }}>ABAX PROTOCOL</span>
          </StyledBodyTitle>
          <StyledBodySubTitle>{mainHeaderText}</StyledBodySubTitle>
          <StyledBodySubText>Part of the Aleph Zero Ecosystem Funding Program</StyledBodySubText>

          <StyledTradeLink
            style={{
              background: `linear-gradient(128.17deg, #395175 -14.78%, #755139 110.05%)`,
              color: 'white'
            }}
            href="#"
            // target="_blank"
            // href="https://app.abax.finance/"
          >
            Launch App
          </StyledTradeLink>
          <StyledSocialRow>
            <a href="https://twitter.com/AbaxFinance/">
              <StyledTwitter />
            </a>
            <a href="https://github.com/AbaxFinance/">
              <StyledGithub />
            </a>
            <a href="https://t.me/abaxfinance" style={{ marginLeft: '14px' }}>
              <StyledTelegram />
            </a>
          </StyledSocialRow>
        </StyledTitle>
        <GovernanceSection />
        <StyledBodyTitle2>Making The Decentralized Lending Even Better</StyledBodyTitle2>
        <BenefitsSection />
        <StyledBodyTitle2>A Powerful Protocol</StyledBodyTitle2>
        <FeturesSection />
        <RoadmapSection />
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (max-width: 640px) {
    margin: 0;
  }
`

export const GovernanceCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'lighten' : 'inherit')};
  background: ${({ isDark }) =>
    isDark ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${GovImage})` : 'inherit'};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-clip: ${({ isDark }) => (isDark ? 'content-box' : 'inherit')};
  background-origin: content-box;
  margin-right: 12px;

  @media (max-width: 960px) {
    margin-bottom: 12px;
    margin-right: 0px;
  }
`

export const GrantsCard = styled(StyledCard)`
  max-width: 375px;
  @media (max-width: 960px) {
    max-width: unset;
  }
`

const BenefitsSection = () => {
  const slides = [
    {
      header: 'Fair Interest Rate Model',
      body:
        'Abax Protocol uses a dynamic interest rate model that adjusts based on market demand, ensuring fair and competitive rates for users. Our flexible model maximizes earnings for lenders and minimizes debt costs for borrowers, benefiting both parties.'
    },
    {
      header: 'Innovative Position Risk Model ',
      body:
        'Abax Protocol calculates the maximum debt for each user’s based on users collaterals and debts that built position. Each asset contributes differently to the position depending on it’s volatitlity . The less risky the position, the higher the ratio of debt to collateral may be. This ensures a fair and secure lending and borrowing experience for all users.'
    },
    {
      header: 'Transparency',
      body:
        'Abax Protocol is built with transparency at its core. Our  public code of the  smart contracts are auditable by anyone, at any time. With Abax Protocol, you can have complete confidence in the fairness and transparency of the lending and borrowing process.'
    },
    {
      header: 'Security & Performance',
      body:
        'Abax Protocol is built with a focus on security and performance. Abax contracts are designed for efficiency and the highest standards of security. We have chosen to deploy our smart contracts on Aleph Zero, one of the fastest blockchains with the upcoming privacy supporting features.. '
    }
  ]

  return (
    <StyledSection>
      <StyledItemRow>
        <Swiper
          loop={true}
          breakpoints={{
            959: { slidesPerView: 1 },
            960: { slidesPerView: 2, spaceBetween: 40 }
          }}
          navigation={true}
          centeredSlides={true}
          grabCursor={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="my-swiper"
        >
          {slides.map(({ header, body }, i) => {
            return (
              <SwiperSlide key={i}>
                <Button
                  style={{
                    cursor: 'inherit',
                    borderRadius: '20px',
                    height: '100%'
                  }}
                  outlined
                >
                  <div style={{ padding: '1rem' }}>
                    <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>{header}</StyledBodySubTitle>
                    <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                      {body}
                    </p>
                  </div>
                </Button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </StyledItemRow>
    </StyledSection>
  )
}

const FeturesSection = () => {
  const slides = [
    {
      header: 'Cross-chain Compatibility',
      body:
        'The protocol is built on Aleph Zero and will allow for cross-chain compatibility once Aleph Zero bridges to Polkadot and other ecosystems.'
    },
    {
      header: 'Community Driven',
      body:
        'Abax Protocol is community-driven, with a focus on creating a decentralized, transparent, and open financial ecosystem for all users.'
    },
    {
      header: 'Regulatory Compliance',
      body:
        'Compliance with relevant regulations is a key goal of our Abax community.With a focus on compliance and transparency, we aim to establish ourselves as a trustworthy and reliable partner for both lenders and borrowers.'
    },
    {
      header: 'User Interface tailored to your needs',
      body:
        "Whether you're an experienced blockchain user or new to the technology, the Abax App provides an intuitive and user-friendly way to utilize all the features of our platform."
    }
  ]

  return (
    <StyledSection>
      <StyledItemRow>
        <Swiper
          loop={true}
          breakpoints={{
            959: { slidesPerView: 1 },
            960: { slidesPerView: 2, spaceBetween: 40 }
          }}
          navigation={true}
          centeredSlides={true}
          grabCursor={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
            reverseDirection: true
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="my-swiper"
        >
          {slides.map(({ header, body }, i) => {
            return (
              <SwiperSlide key={i}>
                <Button
                  style={{
                    cursor: 'inherit',
                    borderRadius: '20px',
                    height: '100%'
                  }}
                  outlined
                >
                  <div style={{ padding: '1rem' }}>
                    <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>{header}</StyledBodySubTitle>
                    <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                      {body}
                    </p>
                  </div>
                </Button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </StyledItemRow>
    </StyledSection>
  )
}

const RoadmapGridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  @media (max-width: 960px) {
    grid-auto-flow: row;
    a {
      width: 100%;
    }
  }
`

const RoadmapSection = () => {
  return (
    <>
      <StyledBodyTitle2>Roadmap</StyledBodyTitle2>
      <RoadmapGridContainer>
        <div style={{ width: '100%', height: '100%', flex: 1 }}>
          <Button
            style={{
              cursor: 'inherit',
              borderRadius: '20px',
              width: '100%',
              height: '100%',
              padding: '1rem'
            }}
            outlined
          >
            <StyledBodySubTitle style={{ marginBottom: '0.25rem', paddingLeft: '1rem' }}>
              {'Phase 1'}
            </StyledBodySubTitle>
            <ul
              style={{
                textAlign: 'left',
                margin: '0',
                opacity: '0.6',
                fontSize: '16px',
                padding: '1rem',
                fontWeight: 400
              }}
            >
              <li>Converge on the vision of the DAO</li>
              <ul>
                <li>Governance processes</li>
                <li>Tokenomics</li>
              </ul>
              <li>Switch to the on-chain governance</li>
              <li>Launch protocol demo on the testnet</li>
            </ul>
          </Button>
        </div>
        <div style={{ width: '100%', height: '100%', flex: 1 }}>
          <Button
            style={{
              cursor: 'inherit',
              borderRadius: '20px',
              width: '100%',
              height: '100%',
              padding: '1rem'
            }}
            outlined
          >
            <StyledBodySubTitle style={{ marginBottom: '0.25rem', paddingLeft: '1rem' }}>
              {'Phase 2'}
            </StyledBodySubTitle>
            <ul
              style={{
                textAlign: 'left',
                margin: '0',
                opacity: '0.6',
                fontSize: '16px',
                padding: '1rem',
                fontWeight: 400
              }}
            >
              <li>Distribute DAO tokens to financial contributors</li>
              <li>Launch protocol on the mainnet</li>
            </ul>
          </Button>
        </div>
        <div style={{ width: '100%', height: '100%', flex: 1 }}>
          <Button
            style={{
              cursor: 'inherit',
              borderRadius: '20px',
              width: '100%',
              height: '100%',
              padding: '1rem'
            }}
            outlined
          >
            <StyledBodySubTitle style={{ marginBottom: '0.25rem', paddingLeft: '1rem' }}>
              {'Phase 3'}
            </StyledBodySubTitle>
            <ul
              style={{
                textAlign: 'left',
                margin: '0',
                opacity: '0.6',
                fontSize: '16px',
                padding: '1rem',
                fontWeight: 400
              }}
            >
              <li>Establish the foundation</li>
              <li>further Improve Interest Rate Model</li>
              <li>Implement ideas issued by DAO</li>
              <li>...TBD</li>
            </ul>
          </Button>
        </div>
      </RoadmapGridContainer>
    </>
  )
}

const GovernanceSection = () => {
  const [isDark] = useDarkMode()
  return (
    <StyledSection>
      <StyledItemRow style={{ alignItems: 'center' }}>
        <GovernanceCard
          isDark={isDark}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <span>
            <StyledSectionTitle>Shape Abax with us!</StyledSectionTitle>
            <StyledBodySubTitle style={{ fontSize: '20px' }}>
              Join the Abax Discourse where you can shape the future of lending in the Aleph Zero ecosystem. Participate
              in the development of tokenomics, governance processes of the DAO, by sharing your meaningful ideas.
              Become one of the earliest contributors to the project that values your input and rewards you for your
              efforts.
            </StyledBodySubTitle>
          </span>
          <Button href="https://gov.abax.finance/t/welcome-to-the-abax-protocol-community/24/1" outlined>
            <p style={{ margin: 0 }}>Read more </p>
          </Button>
        </GovernanceCard>
        <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            style={{ borderRadius: '20px', width: '100%' }}
            href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
            rel="noreferrer noopener"
            target="_blank"
            outlined
          >
            <div style={{ padding: '1rem' }}>
              <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                Whitepaper <span style={{ fontSize: '16px' }}>↗</span>
              </StyledBodySubTitle>
              <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Read the document and understand the core concepts of Abax.
              </p>
            </div>
          </Button>
          <Button style={{ borderRadius: '20px', width: '100%' }} href="https://gov.abax.finance" outlined>
            <div style={{ padding: '1rem' }}>
              <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                Governance Forum <span style={{ fontSize: '16px' }}>↗</span>
              </StyledBodySubTitle>
              <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Participate by proposing upgrades and discussing the future of the protocol with the Abax community.
              </p>
            </div>
          </Button>
          <Button
            style={{ borderRadius: '20px', width: '100%' }}
            href="https://gov.abax.finance/t/abax-the-dao-token-tokenomics/32"
            outlined
          >
            <div style={{ padding: '1rem' }}>
              <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                ABAX Token<span style={{ fontSize: '16px' }}>↗</span>
              </StyledBodySubTitle>
              <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Read and discuss the DAO token tokenomics proposal.
              </p>
            </div>
          </Button>
        </StyledItemColumn>
      </StyledItemRow>
    </StyledSection>
  )
}
