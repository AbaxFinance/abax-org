import React from 'react'
import styled, { useTheme } from 'styled-components'
import { useDarkMode } from '../contexts/Application'

const StyledSVGLogoContainer = styled.svg`
  margin: 0;
  width: 118px;
  margin-right: 0.35rem;
  margin-top: -4px;
  transition: fill 10ms ease-out;
  rect {
    transition: fill 200ms ease-out;
  }
`

const StyledLogo = () => {
  const theme = useTheme()
  const isDarkMode = useDarkMode()

  const innerFill = isDarkMode ? theme.backgroundColor : theme.textColor
  const outerFill = isDarkMode ? theme.textColor : theme.invertedTextColor
  return (
    <StyledSVGLogoContainer viewBox="0 0 2566 818" fill={innerFill} xmlns="http://www.w3.org/2000/svg">
      <circle cx="161" cy="287" r="161" fill={outerFill} />
      <circle cx="531" cy="657" r="161" fill={outerFill} />
      <circle cx="161" cy="657" r="161" fill={outerFill} />
      <circle cx="531" cy="287" r="161" fill={outerFill} />
      <circle cx="161" cy="287" r="100" fill={innerFill} />
      <circle cx="531" cy="657" r="100" fill={innerFill} />
      <circle cx="161" cy="652" r="100" fill={innerFill} />
      <circle cx="531" cy="287" r="100" fill={innerFill} />
      <rect x="154" y="257" width="277" height="63" fill={outerFill} />
      <rect x="129" y="585" width="328" height="63" transform="rotate(-90 129 585)" fill={outerFill} />
      <rect x="500" y="688" width="301" height="63" transform="rotate(-90 500 688)" fill={outerFill} />
      <rect x="129" y="627" width="336" height="63" fill={outerFill} />
      <rect x="908" y="627" width="292" height="63" fill={outerFill} />
      <rect x="908" y="448" width="292" height="63" fill={outerFill} />
      <rect x="908" y="257" width="292" height="63" fill={outerFill} />
      <rect x="1331" y="267" width="292" height="63" fill={outerFill} />
      <rect x="1331" y="628" width="292" height="63" fill={outerFill} />
      <rect x="1139" y="690" width="433" height="63" transform="rotate(-90 1139 690)" fill={outerFill} />
      <rect x="1562" y="691" width="424" height="63" transform="rotate(-90 1562 691)" fill={outerFill} />
      <rect x="1331" y="689" width="689" height="63" transform="rotate(-90 1331 689)" fill={outerFill} />
      <rect x="908" y="688" width="192" height="63" transform="rotate(-90 908 688)" fill={outerFill} />
      <rect x="1756" y="633" width="292" height="63" fill={outerFill} />
      <rect x="1756" y="454" width="292" height="63" fill={outerFill} />
      <rect x="1756" y="263" width="292" height="63" fill={outerFill} />
      <rect x="1987" y="696" width="433" height="63" transform="rotate(-90 1987 696)" fill={outerFill} />
      <rect x="1756" y="694" width="192" height="63" transform="rotate(-90 1756 694)" fill={outerFill} />
      <rect x="2333" y="453.352" width="256.528" height="63" transform="rotate(-60 2333 453.352)" fill={outerFill} />
      <rect
        x="2191.08"
        y="213.501"
        width="304.097"
        height="63"
        transform="rotate(60 2191.08 213.501)"
        fill={outerFill}
      />
      <rect
        x="2460.98"
        y="727.948"
        width="279.955"
        height="63"
        transform="rotate(-120 2460.98 727.948)"
        fill={outerFill}
      />
      <rect
        x="2137.67"
        y="706.288"
        width="301.795"
        height="63"
        transform="rotate(-60 2137.67 706.288)"
        fill={outerFill}
      />
      <rect x="2288.24" y="444.926" width="90" height="63" fill={outerFill} />
      <rect x="1991" y="696" width="575" height="122" fill={innerFill} />
      <rect x="1880" width="686" height="263" fill={innerFill} />
    </StyledSVGLogoContainer>
  )
}

export default StyledLogo
