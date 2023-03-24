import styled from 'styled-components'
import Logo from '../images/abax.inline.svg'
const StyledLogo = styled(Logo)`
  * {
    fill: ${({ theme }) => theme.textColor};
  }
  margin: 0;
  width: 118px;
  margin-right: 0.35rem;
  margin-top: -4px;
`

export default StyledLogo
