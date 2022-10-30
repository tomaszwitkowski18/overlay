import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StartMatchMain = styled.form``

const StartMatchFormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

const TeamsListSelect = styled.select``

const TeamsListOption = styled.option``

const TeamLabel = styled.label`
  display: block;
`

const StartMatchButton = styled.button``

const StartMatch = () => {
  const [teamsList, setTeamsList] = useState([]);
  const [selectsTeamFirstValue, setSelectsTeamFirstValue] = useState();
  const [selectsTeamSecondValue, setSelectsTeamSecondValue] = useState();

  useEffect(() => {
    axios.get('https://volley.828.li/api/v1/getTeams.php')
      .then(request => {
        setTeamsList(request.data)
      })
  }, [])

  const startMatch = async e => {
    e.preventDefault();
    if (selectsTeamFirstValue !== selectsTeamSecondValue) {
      await axios.post('https://volley.828.li/api/v1/startMatch.php', {
        teamFirst: selectsTeamFirstValue,
        teamSecond: selectsTeamSecondValue
      }).catch(err => console.log(err))
      window.location = '/panel'
    } else {
      alert('próbujesz zacząć mecz tej samej drużyny')
    }
  }

  const handleChange = e => {
    switch (e.target.id) {
      case 'teamFirst':
        setSelectsTeamFirstValue(e.target.value);
        break;
      case 'teamSecond':
        setSelectsTeamSecondValue(e.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <StartMatchMain>
      <StartMatchFormGroup>
        <TeamLabel htmlFor="teamFirst">
          Team 1:
        </TeamLabel>
        <TeamsListSelect id="teamFirst" onChange={handleChange}>
          <TeamsListOption defaultValue value="">Wybierz team</TeamsListOption>
          {teamsList.map(el => (
            <TeamsListOption key={el.id} value={el.id}>
              {el.name}
            </TeamsListOption>
          ))}
        </TeamsListSelect>
      </StartMatchFormGroup>
      <StartMatchFormGroup>
        <TeamLabel htmlFor="teamSecond">
          Team 2:
        </TeamLabel>
        <TeamsListSelect id="teamSecond" onChange={handleChange}>
          <TeamsListOption defaultValue value="">Wybierz team</TeamsListOption>
          {teamsList.map(el => (
            <TeamsListOption key={el.id} value={el.id}>
              {el.name}
            </TeamsListOption>
          ))}
        </TeamsListSelect>
      </StartMatchFormGroup>
      <StartMatchFormGroup>
        <StartMatchButton onClick={startMatch}>
          Start
        </StartMatchButton>
      </StartMatchFormGroup>
    </StartMatchMain>
  );
}

export default StartMatch