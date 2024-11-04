import HomeHeader from "../components/Home/HomeHeader";
import RankingBoard from "../components/RankingBoard/RankingBoard";
import styled from "styled-components";
import { useState } from "react";
import GameBoard from "../components/Home/GameBoard/GameBoard";

export const Home = () => {
  const [selected, setSelected] = useState("game");

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  return (
    <HomePageWrapper>
      <HomeHeader selected={selected} onSelect={handleSelect} />
      <HomeBody>{selected === "ranking" && <RankingBoard />}</HomeBody>
      <HomeBody>
        {selected === "game" && (
          <GameBoard initialLength={16} remainingLength={16} gridLength={4} />
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
