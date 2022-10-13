import styled from "styled-components";

const PanelPreviousSetsMain = styled.span`
  font-size: 30px;
  font-weight: 800;
  display: block;
  padding: 0 20px 20px;
`

const SinglePreviousSet = styled.span``

const PanelPreviousSets = () => {
  return (
    <PanelPreviousSetsMain>
      <SinglePreviousSet>
        25:15
      </SinglePreviousSet>
      <SinglePreviousSet>
        25:17
      </SinglePreviousSet>
    </PanelPreviousSetsMain>
  );
}

export default PanelPreviousSets