import React from 'react'

import styled from 'styled-components'

import gql from 'graphql-tag'

import { Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 1rem;
  }
`

const StyledSectionFlex = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 960px;
  margin-left: 5rem;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-left: 0;
    margin-top: 0rem;
    width: 100%;
    flex-direction: column;
  }
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    /* margin-bottom: 0.5rem; */
    max-width: 650px;
  }
`

const Numbers = styled(StyledSectionFlex)`
  @media (max-width: 960px) {
    display: none;
  }
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 4rem;
  font-size: 72px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const InternalLink = styled(Link)`
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  h2 {
    margin: 0;
  }

  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
`

const ExternalLink = styled.a`
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  h2 {
    margin: 0;
  }

  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
`

export const GET_BLOCK = gql`
  query blocks($timestamp: Int!) {
    blocks(first: 1, orderBy: timestamp, orderDirection: asc, where: { timestamp_gt: $timestamp }) {
      id
      number
      timestamp
    }
  }
`

export const ETH_PRICE = block => {
  const queryString = block
    ? `
    query bundles {
      bundles(where: { id: ${1} } block: {number: ${block}}) {
        id
        ethPrice
      }
    }
  `
    : ` query bundles {
      bundles(where: { id: ${1} }) {
        id
        ethPrice
      }
    }
  `
  return gql(queryString)
}

const About = props => {
  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ paddingBottom: '4rem' }}>The Secure and Fair Lending Solution launched on Aleph Zero.</Title>

          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
            <p>
              Abax empowers developers, liquidity providers and traders to participate in a financial marketplace that
              is open and accessible to all.
            </p>
            <p>We are committed to open source software and building on the decentralized web.</p>

            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
              <InternalLink to="/blog/abax">ABAX token</InternalLink>
              <ExternalLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://abaxfinance.github.io/abax-org/whitepaper.pdf"
              >
                Whitepaper <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
              <InternalLink to="/faq">FAQ</InternalLink>
            </div>
          </StyledSectionFlex>

          <StyledSectionFlex id="contact" style={{ flexDirection: 'column' }}>
            <h2 style={{ width: '100%' }}>Contact</h2>
            <p>
              To get in touch, please email <a href="mailto:contact@abax.finance">contact@abax.finance</a>
            </p>

            <p>
              We encourage anyone facing issues with their wallet, transaction or Abax related question to join our
              active community on&nbsp;
              <ExternalLink target="_blank" rel="noopener noreferrer" href={'https://t.me/abaxfinance'}>
                Telegram
              </ExternalLink>
              .
            </p>

            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
              <ExternalLink target="_blank" rel="noopener noreferrer" href={'https://discord.gg/<placeholder>'}>
                Discord <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
              <ExternalLink target="_blank" rel="noopener noreferrer" href={'https://twitter.com/AbaxFinance'}>
                Twitter <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
              <ExternalLink target="_blank" rel="noopener noreferrer" href={'https://t.me/abaxfinance'}>
                Telegram <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
            </div>
          </StyledSectionFlex>
        </span>
      </StyledAbout>
    </Layout>
  )
}

export default About
