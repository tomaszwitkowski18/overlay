import styled from "styled-components";

import PreviousSets from "../components/PreviousSets";
import MatchTime from "../components/MatchTime";

const PanelMain = styled.div`
  padding: 20px 0;
  background-color: #fff;
`

const Panel = () => {
  return (
    <PanelMain>
      <PreviousSets previousSets={['25:15', '25:17']} />
      <MatchTime />
    </PanelMain>
  );
}

export default Panel