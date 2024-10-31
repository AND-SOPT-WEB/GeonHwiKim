import styled from "styled-components";
import { useState } from "react";

const HomeHeader = () => {
  const [selected, setSelected] = useState("game");
  const [level, setLevel] = useState("Level1");

  return (
    <HomeHeaderWrapper>
      <HomeHeaderLeft>
        <HomeHeaderTitle>1 to 50</HomeHeaderTitle>
        <ToggleWrapper>
          <ToggleButton
            selected={selected === "game"}
            onClick={() => setSelected("game")}
          >
            게임
          </ToggleButton>
          <ToggleButton
            selected={selected === "ranking"}
            onClick={() => setSelected("ranking")}
          >
            랭킹
          </ToggleButton>
        </ToggleWrapper>
      </HomeHeaderLeft>
      {selected === "game" && (
        <HomeHeaderRight>
          <SelectedLevel>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="level1">level1</option>
              <option value="level2">level2</option>
              <option value="level3">level3</option>
            </select>
          </SelectedLevel>
          <Time>0</Time>
        </HomeHeaderRight>
      )}
    </HomeHeaderWrapper>
  );
};

export default HomeHeader;

const HomeHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  padding: 2rem 10rem;
  background: ${({ theme }) => theme.colors.orange1};
`;

const HomeHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HomeHeaderTitle = styled.h1`
  font-size: 6rem;
  margin-right: 3rem;
`;

const ToggleWrapper = styled.div`
  display: flex;
  width: 25rem;
  background: ${({ theme }) => theme.colors.grey2};
  border-radius: 2rem;
  padding: 0.5rem;
  gap: 1rem;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 5rem;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.orange3 : "transparent"};
  border: none;
  padding: 1rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 3rem;
  font-weight: 500;

  &:hover {
    background: ${({ selected, theme }) =>
      selected ? theme.colors.orange3 : theme.colors.orange4};
  }
`;

const HomeHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const SelectedLevel = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 500;

  select {
    padding: 0.5rem;
    font-size: 3rem;
    font-weight: 500;
    border-radius: 20px;
    border: none;
  }
`;

const Time = styled.p`
  font-size: 3rem;
`;
