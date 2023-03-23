import styled from 'styled-components'
import bgBanner from '../images/abax.bgBanner.png'

import gImage from '../images/glimmer_bg.svg'
import noise from '../images/noise.png'
import { Link } from 'gatsby'

export const CardBGImage = styled.span`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  width: 24rem;
  height: 24rem;
  opacity: 1;
  position: absolute;
  left: 45vw;
  top: 10vw;
  opacity: 1;
  position: absolute;
  background: url(${bgBanner});
  content: '';
  background-size: contain;
  background-repeat: no-repeat;
  animation: rotation 18s infinite linear;

  ${({ desaturate }) => desaturate && `filter: saturate(0)`};
  @media (max-width: 960px) {
    background-repeat: no-repeat;
    width: 100vw;
    left: -60px;
  }
`

export const CardNoise = styled.span`
  background: url(${noise});
  mix-blend-mode: overlay;
  width: 100%;
  height: 100%;
  /* max-width: 1000px; */
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
  z-index: 99;
`

export const CardFade = styled.span`
  /* mix-blend-mode: overlay; */
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradientBG};
  /* max-width: 1000px; */
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
  z-index: 99;
  @media (max-width: 960px) {
    height: 125vh;
  }
`

export const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  margin: 0.25rem 0;
  display: block;
  width: 100%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  width: fit-content;
  color: ${({ theme }) => theme.textColor};
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);

  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`
export const StyledExternalLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  font-size: 24px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardBG};
  border-radius: 12px;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);

  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`
