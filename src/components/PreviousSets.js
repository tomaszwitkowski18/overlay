import styled from 'styled-components'

const PreviousSetsMainWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`

const PreviousSetsMain = styled.div`
  background: #fff;
  display: flex;
  padding: 8px 15px;
`

const PreviousSetSingle = styled.div`
  font-weight: 800;
  &:not(:first-child) {
    margin-left: 15px;
  }
`

const PreviousSets = ({ previousSets }) => {
  return (
    <PreviousSetsMain>
      {previousSets.map(set => (
        <PreviousSetSingle>
          {set}
        </PreviousSetSingle>
      ))}
    </PreviousSetsMain>
  );
}

export default PreviousSets