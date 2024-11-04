import HomeHeader from "../components/Home/HomeHeader";
import RankingBoard from "../components/RankingBoard/RankingBoard";
import styled from "styled-components";
import { useState } from "react";
import GameBoard from "../components/Home/GameBoard/GameBoard";
import { getGameBoardProps } from "../utils/gameBoardUtils";

export const Home = () => {
  const [selected, setSelected] = useState("game");
  const [level, setLevel] = useState("level1");

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };

  const gameBoardProps = getGameBoardProps(level);

  return (
    <HomePageWrapper>
      <HomeHeader
        selected={selected}
        onSelect={handleSelect}
        level={level}
        onLevelChange={handleLevelChange}
      />
      <HomeBody>{selected === "ranking" && <RankingBoard />}</HomeBody>
      <HomeBody>
        {selected === "game" && <GameBoard key={level} {...gameBoardProps} />}
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
