import { useState } from "react";
import styled from "styled-components";
import { sortRanking } from "../../utils/sortRanking";
import ResetButton from "./ResetButton";

const RankingBoard = () => {
  const [rankings, setRankings] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("gameData")) || [];
    return sortRanking(storedData);
  });

  const handleReset = () => {
    localStorage.removeItem("gameData");
    setRankings([]);
  };

  return (
    <RankingBoardWrapper>
      <RankingHeader>
        <Title>랭킹</Title>
        <ResetButton onClick={handleReset}>초기화</ResetButton>
      </RankingHeader>
      <RankingTable>
        <thead>
          <TableRow>
            <TableHeader>타임스탬프</TableHeader>
            <TableHeader>레벨</TableHeader>
            <TableHeader>플레이 시간</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {rankings.map((record, index) => (
            <TableRow key={index}>
              <TableData>{record.currentTime}</TableData>
              <TableData>{record.level}</TableData>
              <TableData>{record.playTime}</TableData>
            </TableRow>
          ))}
        </tbody>
      </RankingTable>
    </RankingBoardWrapper>
  );
};

export default RankingBoard;

const RankingBoardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: auto;
  background: ${({ theme }) => theme.colors.orange6};
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
`;

const RankingHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 48.2%;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`;

const RankingTable = styled.table`
  width: 100%;
  background: ${({ theme }) => theme.colors.orange4};
  overflow: hidden;
`;

const TableRow = styled.tr`
  width: 100%;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ theme }) => theme.colors.white1};
`;

const TableData = styled.td`
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white1};
  border-right: 1px solid ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ theme }) => theme.colors.white1};
`;
