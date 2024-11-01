import HomeHeader from "../components/Home/HomeHeader";
import RankingBoard from "../components/Home/RankingBoard";
import styled from "styled-components";
import { useState } from "react";

export const Home = () => {
  const [selected, setSelected] = useState("game");

  const handleSelect = (selection) => {
    setSelected(selection);
  };

  return (
    <HomePageWrapper>
      <HomeHeader selected={selected} onSelect={handleSelect} />
      <HomeBody>{selected === "ranking" && <RankingBoard />}</HomeBody>
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
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 5rem 0;
`;
