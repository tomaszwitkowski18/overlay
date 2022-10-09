import styled from 'styled-components'

const RowMain = styled.div`
  display: flex;
  height: 51px;
  &:nth-child(2) {
    border-top: 1px solid #fff;
  }
`

const TeamColor = styled.div`
  width: 10px;
  background-color: ${props => `#${props.teamColor}`};
`

const TeamNameServeWrapper = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, rgba(37,81,136,1) 0%, rgba(43,35,90,1) 100%);
  color: #fff;
  padding-right: 17px;
`

const TeamShortname = styled.span`
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0 16px 0 11px;
`

const ServeDot = styled.div`
  font-size: 86px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
`

const SetsScore = styled.div`
  width: 50px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02b0f5;
  color: #fff;
  border-left: 1px solid #fff;
`

const CurrentScore = styled.div`
  width: 50px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const OverlayRow = ({ logo, teamColor, teamShortname, serve, sets, currentScore }) => {
  return (
    <RowMain>
      <TeamColor teamColor={teamColor} />
      <TeamNameServeWrapper>
        <TeamShortname>
          {teamShortname}
        </TeamShortname>
        <ServeDot>
          {serve ? '·' : null}
        </ServeDot>
      </TeamNameServeWrapper>
      <SetsScore>
        {sets}
      </SetsScore>
      <CurrentScore>
        {currentScore}
      </CurrentScore>
    </RowMain>
  );
}

export default OverlayRow