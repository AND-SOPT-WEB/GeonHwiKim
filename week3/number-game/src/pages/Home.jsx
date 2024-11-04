import HomeHeader from "../components/Home/Header/Header";
import RankingBoard from "../components/RankingBoard/RankingBoard";
import styled from "styled-components";
import { useState } from "react";
import GameBoard from "../components/Home/GameBoard/GameBoard";
import { getGameBoardProps } from "../utils/gameSelectLevel";
import { useTimer } from "../hooks/useTimer";
import { saveGameDataToLocalStorage } from "../utils/saveGameDataToLocalStorage";

export const Home = () => {
  const [selected, setSelected] = useState("game");
  const [level, setLevel] = useState("level1");
  const { time, startTimer, stopTimer, resetTimer, formatTime } = useTimer();

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    resetTimer();
  };

  const handleGameEnd = () => {
    stopTimer();
    saveGameDataToLocalStorage(level, formatTime(time));
  };

  return (
    <HomePageWrapper>
      <HomeHeader
        selected={selected}
        onSelect={handleSelect}
        level={level}
        onLevelChange={handleLevelChange}
        time={formatTime(time)}
      />
      <HomeBody>{selected === "ranking" && <RankingBoard />}</HomeBody>
      <HomeBody>
        {selected === "game" && (
          <GameBoard
            key={level}
            currentTime={formatTime(time)}
            onFirstClick={startTimer}
            onLastClick={handleGameEnd}
            onReset={resetTimer}
            {...getGameBoardProps(level)}
          />
        )}
      </HomeBody>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.orange7};
`;

const HomeBody = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;
