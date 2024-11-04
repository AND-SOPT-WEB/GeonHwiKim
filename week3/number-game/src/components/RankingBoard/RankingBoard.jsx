import styled from "styled-components";

const RankingBoard = () => {
  return (
    <RankingBoardWrapper>
      <RankingHeader>
        <Title>랭킹</Title>
        <ResetButton>초기화</ResetButton>
      </RankingHeader>
      <RankingTable>
        <TableRow>
          <TableHeader>타임스탬프</TableHeader>
          <TableHeader>레벨</TableHeader>
          <TableHeader>플레이 시간</TableHeader>
        </TableRow>
      </RankingTable>
    </RankingBoardWrapper>
  );
};

export default RankingBoard;

const RankingBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: auto;
  background: ${({ theme }) => theme.colors.orange6};
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
`;

const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 48.2%;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.orange5};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.orange2};
  }
`;

const RankingTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.orange4};
  border-radius: 10px;
  overflow: hidden;
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
`;

const TableHeader = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white1};
  border-right: 1px solid ${({ theme }) => theme.colors.white1};

  &:last-child {
    border-right: none;
  }
`;
