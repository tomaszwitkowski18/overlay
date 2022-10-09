import styled from "styled-components";

const MatchTimeTimer = styled.span`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  display: block;
`

const MatchTime = () => {
  return (
    <MatchTimeTimer>
      1h 23m
    </MatchTimeTimer>
  );
}

export default MatchTime