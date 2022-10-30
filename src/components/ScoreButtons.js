import axios from 'axios';
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

const ScoreButtton = styled.button`
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

const BreakButton = styled.button`
  padding: 10px;
  background-color: #0082fe;
  text-transform: uppercase;
  color: #fff;
  border: 0;
`

const EndSetButton = styled.button`
  padding: 10px;
  background-color: #f00;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  margin-top: 30px;
`

const TogglePanelModeButton = styled.button`
  padding: 10px;
  background-color: #00f;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  margin-top: 30px;
`

const FinishMatchButton = styled.button`
  padding: 10px;
  background-color: #000;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  margin-top: 30px;
`

const teamData = {
  id: null,
  name: null,
  score: null,
  sets: null,
}

const ScoreButttons = () => {
  const [leftTeam, setLeftTeam] = useState(teamData);
  const [rightTeam, setRightTeam] = useState(teamData);
  const [panelMode, setPanelMode] = useState('dodaj');

  useEffect(() => {
    axios.get('https://volley.828.li/api/v1/getOngoingMatchPanel.php').then(request => {
      setLeftTeam({
        id: request.data[0].id,
        name: request.data[0].name,
        score: request.data[0].team_first_score,
        sets: request.data[0].team_first_sets
      })
      setRightTeam({
        id: request.data[1].id,
        name: request.data[1].name,
        score: request.data[1].team_second_score,
        sets: request.data[1].team_second_sets
      })
    }).catch(err => console.error(err))
  }, [])

  const updateScore = (leftTeamScore, rightTeamScore) => {
    axios.post('https://volley.828.li/api/v1/updateScore.php', {
      teamFirst: leftTeam.id,
      teamSecond: rightTeam.id,
      teamFirstScore: leftTeamScore,
      teamSecondScore: rightTeamScore,
    }).catch(err => console.error(err))
  }

  const handleButton = button => {
    if (panelMode === 'dodaj') {
      switch (button) {
        case 'left':
          const leftTeamScore = leftTeam.score + 1;
          setLeftTeam({
            ...leftTeam,
            score: leftTeamScore
          })
          updateScore(leftTeamScore, rightTeam.score)
          break;
        case 'right':
          const rightTeamScore = rightTeam.score + 1
          setRightTeam({
            ...rightTeam,
            score: rightTeamScore
          })
          updateScore(leftTeam.score, rightTeamScore)
          break;
        default:
          return;
      }
    } else {
      switch (button) {
        case 'left':
          const leftTeamScore = leftTeam.score - 1;
          setLeftTeam({
            ...leftTeam,
            score: leftTeamScore
          })
          updateScore(leftTeamScore, rightTeam.score)
          break;
        case 'right':
          const rightTeamScore = rightTeam.score - 1;
          setRightTeam({
            ...rightTeam,
            score: rightTeamScore
          })
          updateScore(leftTeam.score, rightTeamScore)
          break;
        default:
          return;
      }
    }
  }

  const setSetsData = (teamFirstSets, teamSecondSets, setWinner, setNumber, setScore) => {
    axios.post('https://volley.828.li/api/v1/updateSets.php', {
      teamFirst: leftTeam.id,
      teamSecond: rightTeam.id,
      teamFirstSets,
      teamSecondSets,
      setWinner,
      setNumber,
      setScore
    }).catch(err => console.error(err))
  }

  const countSets = () => {
    if (window.confirm("Czy na pewno chcesz zakończyć set?")) {
      if (leftTeam.score > rightTeam.score) {
        const leftTeamSets = leftTeam.sets + 1;
        setLeftTeam({
          ...leftTeam,
          sets: leftTeamSets,
          score: 0
        })
        setRightTeam({
          ...rightTeam,
          score: 0
        })
        setSetsData(leftTeamSets, rightTeam.sets, leftTeam.id, leftTeam.sets + rightTeam.sets + 1, `${leftTeam.score}:${rightTeam.score}`)
      } else {
        const rightTeamSets = rightTeam.sets + 1;
        setRightTeam({
          ...rightTeam,
          sets: rightTeamSets,
          score: 0
        })
        setLeftTeam({
          ...leftTeam,
          score: 0
        })
        setSetsData(leftTeam.sets, rightTeamSets, rightTeam
          .id, leftTeam.sets + rightTeam.sets + 1, `${leftTeam.score}:${rightTeam.score}`)
      }
    }
  }

  const togglePanelMode = () => {
    if (panelMode === 'dodaj') {
      setPanelMode('usuń')
    } else {
      setPanelMode('dodaj')
    }
  }

  const finishMatch = () => {
    if (window.confirm("Czy na pewno chcesz zakończyć mecz?")) {
      axios.post('https://volley.828.li/api/v1/finishMatch.php', {
        teamFirst: leftTeam.id,
        teamSecond: rightTeam.id
      }).catch(err => console.error(err))
    }
  }

  return (
    <ScoreButttonsMain>
      <ScoreButttonsCol>
        <TeamName>
          {leftTeam.name}
        </TeamName>
        <ScoreButtton onClick={() => handleButton('left')}>
          {leftTeam.score}
        </ScoreButtton>
      </ScoreButttonsCol>
      <ScoreButttonsCol>
        <Set>
          SET
        </Set>
        <SetScore>
          {leftTeam.sets} - {rightTeam.sets}
        </SetScore>
        <BreakButton>
          przerwa
        </BreakButton>
        <EndSetButton onClick={countSets}>
          zakoncz set
        </EndSetButton>
        <TogglePanelModeButton onClick={togglePanelMode}>
          tryb panelu (obecnie: {panelMode})
        </TogglePanelModeButton>
        <FinishMatchButton onClick={finishMatch}>
          zakończ mecz
        </FinishMatchButton>
      </ScoreButttonsCol>
      <ScoreButttonsCol>
        <TeamName>
          {rightTeam.name}
        </TeamName>
        <ScoreButtton onClick={() => handleButton('right')}>
          {rightTeam.score}
        </ScoreButtton>
      </ScoreButttonsCol>
    </ScoreButttonsMain>
  );
}

export default ScoreButttons