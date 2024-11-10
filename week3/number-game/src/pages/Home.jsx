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
    <>
      <HomeHeader
        selected={selected}
        onSelect={handleSelect}
        level={level}
        onLevelChange={handleLevelChange}
        time={formatTime(time)}
      />
      <HomeBody>
        {selected === "ranking" ? (
          <RankingBoard />
        ) : (
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
    </>
  );
};

const HomeBody = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.orange7};
`;
