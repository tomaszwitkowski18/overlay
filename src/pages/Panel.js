import styled from "styled-components";

import PreviousSets from "../components/PreviousSets";

const PanelMain = styled.div`
  
`

const Panel = () => {
  return (
    <PanelMain>
      <PreviousSets previousSets={['25:15', '25:17']} />
    </PanelMain>
  );
}

export default Panel