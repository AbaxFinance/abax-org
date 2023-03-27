import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'
import Telegram from '../images/telegram.inline.svg'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  position: relative;
  padding: 2rem;

  @media (max-width: 1155px) {
    display: block;
  }

  @media (max-width: 960px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

const StyledFooterLink = styled(Link)`
  margin-right: 12px;
  color: ${({ theme }) => theme.textColor};
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
  margin-right: 12px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
  margin-right: 10px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
  margin-right: 12px;
`

const StyledTelegram = styled(Telegram)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Abax</p>
      <StyledFooterLinkSection>
        <StyledFooterLink to="/about">About</StyledFooterLink>
        <a href="https://twitter.com/AbaxFinance" rel="noopener noreferrer" target="_blank">
          <StyledTwitter />
        </a>
        <a href="https://github.com/AbaxFinance" rel="noopener noreferrer" target="_blank">
          <StyledGithub />
        </a>
        <a href="https://t.me/abaxprotocol" rel="noopener noreferrer" target="_blank">
          <StyledTelegram />
        </a>
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}
export default Footer
