import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import SelecteLevel from "./SelecteLevel";
import TimerTime from "./TimerTime";

const Header = ({ selected, onSelect, level, onLevelChange, time }) => {
  return (
    <HomeHeaderWrapper>
      <HomeHeaderLeft>
        <HomeHeaderTitle>1 to 50</HomeHeaderTitle>
        <ToggleWrapper>
          <ToggleButton
            selected={selected === "game"}
            onClick={() => onSelect("game")}
          >
            게임
          </ToggleButton>
          <ToggleButton
            selected={selected === "ranking"}
            onClick={() => onSelect("ranking")}
          >
            랭킹
          </ToggleButton>
        </ToggleWrapper>
      </HomeHeaderLeft>
      {selected === "game" && (
        <HomeHeaderRight>
          <SelecteLevel level={level} onLevelChange={onLevelChange} />
          <TimerTime time={time} />
        </HomeHeaderRight>
      )}
    </HomeHeaderWrapper>
  );
};

export default Header;

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

const HomeHeaderRight = styled.div`
  display: flex;
  width: 20rem;
  align-items: center;
  gap: 3rem;
`;
