import styled from 'styled-components'

import OverlayRow from "../components/OverlayRow";
import PreviousSets from "../components/PreviousSets";

const OverlayWrapper = styled.div`
  max-width: 288px;
`

const PreviousSetsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`

const Overlay = () => {
  return (
    <OverlayWrapper>
      <OverlayRow teamColor={'1aa9e1'} teamShortname={'sgsm'} serve={1} sets={2} currentScore={20} />
      <OverlayRow teamColor={'ff0000'} teamShortname={'sgsm'} serve={1} sets={2} currentScore={20} />
      <PreviousSetsWrapper>
        <PreviousSets previousSets={['25:15', '25:17']} />
      </PreviousSetsWrapper>
    </OverlayWrapper>
  );
}

export default Overlay