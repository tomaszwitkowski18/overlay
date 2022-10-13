import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ScoreButttonsMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const ScoreButttonsCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &:nth-child(2) {
    padding-top: 15px;
  }
`

const TeamName = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const ScoreButtton = styled.div`
  font-size: 70px;
  font-weight: 800;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 20px;
  max-width: 110px;
  margin-top: 10px;
`

const Set = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 30px;
`

const SetScore = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`

const BreakButton = styled.div`
  padding: 10px;
  background-color: #0082fe;
  text-transform: uppercase;
  color: #fff;
`

const ScoreButttons = () => {
  const [leftTeam, setLeftTeam] = useState({});
  const [rightTeam, setRightTeam] = useState({});

  const handleLeftTeamButton = () => {

  }

  return (
    <ScoreButttonsMain>
      <ScoreButttonsCol>
        <TeamName>
          nazwa zespołu
        </TeamName>
        <ScoreButtton onClick={handleLeftTeamButton}>
          10
        </ScoreButtton>
      </ScoreButttonsCol>
      <ScoreButttonsCol>
        <Set>
          SET
        </Set>
        <SetScore>
          1-1
        </SetScore>
        <BreakButton>
          przerwa
        </BreakButton>
      </ScoreButttonsCol>
      <ScoreButttonsCol>
        <TeamName>
          nazwa zespołu
        </TeamName>
        <ScoreButtton>
          10
        </ScoreButtton>
      </ScoreButttonsCol>
    </ScoreButttonsMain>
  );
}

export default ScoreButttons