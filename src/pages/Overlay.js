import styled from 'styled-components'

import OverlayRow from "../components/OverlayRow";
import PreviousSets from "../components/PreviousSets";

import Logo from '../images/dummy_logo.png'

const OverlayWrapper = styled.div`
  max-width: 288px;
  display: flex;
`
const OverlayColumn = styled.div``

const PreviousSetsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`

const LogoWrapper = styled.div`
  width: 51px; 
  background: #fff;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  height: calc(100% - 35px);
`

const ClubLogo = styled.img`
  width: 33px;
  height: 33px;
  object-fit: contain;
`

const Overlay = () => {
  return (
    <OverlayWrapper>
      <OverlayColumn>
        <LogoWrapper>
          <ClubLogo src={Logo} />
        </LogoWrapper>
      </OverlayColumn>
      <OverlayColumn>
        <OverlayRow teamColor={'1aa9e1'} teamShortname={'sgsm'} serve={1} sets={2} currentScore={20} />
        <OverlayRow teamColor={'ff0000'} teamShortname={'sgsm'} serve={0} sets={2} currentScore={20} />
        <PreviousSetsWrapper>
          <PreviousSets previousSets={['25:15', '25:17']} />
        </PreviousSetsWrapper>
      </OverlayColumn>
    </OverlayWrapper>
  );
}

export default Overlay