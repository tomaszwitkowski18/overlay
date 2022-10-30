import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

import OverlayRow from "../components/OverlayRow";
import PreviousSets from "../components/PreviousSets";

import Logo from '../images/dummy_logo.png'

const OverlayMain = styled.div`
  width: 1920px;
  height: 1080px;
`

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

const matchData = {
  team_first_name: null,
  team_second_name: null,
  team_first_score: null,
  team_second_score: null,
  team_first_sets: null,
  team_second_sets: null,
  match_start_time: null,
  sets: null
}

const Overlay = () => {
  const [currentMatchData, setCurrentMatchData] = useState(matchData);

  useEffect(() => {
    setInterval(() => {
      axios.get('https://volley.828.li/api/v1/getOngoingMatchOverlay.php').then(request => {
        setCurrentMatchData(request.data)
      }).catch(err => console.error(err))
    }, 3000)
  }, [])

  return (
    <OverlayMain>
      <OverlayWrapper>
        <OverlayColumn>
          <LogoWrapper>
            <ClubLogo src={Logo} />
          </LogoWrapper>
        </OverlayColumn>
        <OverlayColumn>
          <OverlayRow
            teamColor={'1aa9e1'}
            teamShortname={currentMatchData.team_first_name}
            serve={1}
            sets={currentMatchData.team_first_sets}
            currentScore={currentMatchData.team_first_score} />
          <OverlayRow
            teamColor={'1aa9e1'}
            teamShortname={currentMatchData.team_second_name}
            serve={1}
            sets={currentMatchData.team_second_sets}
            currentScore={currentMatchData.team_second_score} />
          <PreviousSetsWrapper>
            <PreviousSets previousSets={currentMatchData.sets} />
          </PreviousSetsWrapper>
        </OverlayColumn>
      </OverlayWrapper>
    </OverlayMain>
  );
}

export default Overlay