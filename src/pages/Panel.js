import styled from "styled-components";

import PanelPreviousSets from "../components/PanelPreviousSets";
import MatchTime from "../components/MatchTime";
import ScoreButttons from "../components/ScoreButtons";

const PanelMain = styled.div`
  padding: 20px 0;
`

const Panel = () => {
  return (
    <PanelMain>
      <PanelPreviousSets />
      <MatchTime />
      <ScoreButttons />
    </PanelMain>
  );
}

export default Panel