import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import CompleteModal from "../../Modal/CompleteModal";
import NextNumber from "./NextNumber";
import { generateShuffledNumbers } from "../../../utils/generateShuffledNumbers";
import { resetGame } from "../../../utils/resetGame";
import { handleNumberClick } from "../../../utils/handleNumberClick";

const GameBoard = ({
  initialLength,
  remainingLength,
  gridLength,
  onFirstClick,
  onLastClick,
  onReset,
  currentTime,
}) => {
  const [initialNums, setInitialnums] = useState(() =>
    generateShuffledNumbers(1, initialLength)
  );
  const [upcomingNums, setUpcomingNums] = useState(() =>
    generateShuffledNumbers(initialLength + 1, remainingLength)
  );
  const [currentNumber, setCurrentNumber] = useState(1);
  const [gameComplete, setGameComplete] = useState(false);
  const [clickedIndexes, setClickedIndexes] = useState(new Set());

  const handleInitialNumClick = (index) => {
    const [next, ...rest] = upcomingNums;
    setUpcomingNums(rest);
    setInitialnums((prev) => prev.map((num, i) => (i === index ? next : num)));
    setClickedIndexes((prev) => new Set(prev).add(index));
    setCurrentNumber((prev) => prev + 1);
  };

  const handleUpcomingNumClick = (index) => {
    setInitialnums((prev) => prev.map((num, i) => (i === index ? null : num)));
    setCurrentNumber((prev) => prev + 1);
  };

  const reset = () => {
    resetGame(initialLength, remainingLength, {
      setInitialnums,
      setUpcomingNums,
      setCurrentNumber,
      setGameComplete,
      setClickedIndexes,
      onReset,
    });
  };

  const handleClick = (number, index) => {
    handleNumberClick({
      number,
      currentNumber,
      initialLength,
      remainingLength,
      handleInitialNumClick: () => handleInitialNumClick(index),
      handleUpcomingNumClick: () => handleUpcomingNumClick(index),
      setGameComplete,
      onFirstClick,
      onLastClick,
    });
  };

  const handleCloseModal = () => {
    reset();
  };

  return (
    <GameBoardContainer>
      <NextNumber currentNumber={currentNumber} />
      <GameBox $gridLength={gridLength}>
        {initialNums.map((number, index) =>
          number !== null ? (
            <NumberButton
              key={index}
              onClick={() => handleClick(number, index)}
              disabled={number < currentNumber}
              isClicked={clickedIndexes.has(index)}
            >
              {number}
            </NumberButton>
          ) : (
            <EmptySpace key={index} />
          )
        )}
      </GameBox>
      {gameComplete && (
        <CompleteModal onClose={handleCloseModal}>
          <Message>게임 기록: {currentTime}</Message>
          <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
        </CompleteModal>
      )}
    </GameBoardContainer>
  );
};

export default GameBoard;

const GameBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GameBox = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$gridLength}, 1fr);
  gap: 1rem;
  padding: 2rem;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const NumberButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isClicked",
})`
  width: 10rem;
  height: 10rem;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 10px;
  background-color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors.thumnail : theme.colors.orange1};
  transition: background-color 0.5s;
  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${blink} 0.3s;
    `}
`;

const EmptySpace = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: transparent;
  visibility: hidden;
`;

const Message = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black1};
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.black1};
  color: ${({ theme }) => theme.colors.white1};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;
