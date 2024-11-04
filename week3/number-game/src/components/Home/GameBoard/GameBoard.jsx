import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import CompleteModal from "../../Modal/CompleteModal";

const generateNumbers = (start, count) => {
  return Array.from({ length: count }, (_, i) => start + i);
};

const shuffleNumbers = (numbers) => {
  return numbers.sort(() => Math.random() - 0.5);
};

const generateShuffledNumbers = (start, count) => {
  const numbers = generateNumbers(start, count);
  return shuffleNumbers(numbers);
};

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

  const resetGame = () => {
    setInitialnums(generateShuffledNumbers(1, initialLength));
    setUpcomingNums(
      generateShuffledNumbers(initialLength + 1, remainingLength)
    );
    setCurrentNumber(1);
    setGameComplete(false);
    setClickedIndexes(new Set());
    onReset();
  };

  const handleNumberClick = (number, index) => {
    if (number !== currentNumber) return;

    if (currentNumber === 1) {
      onFirstClick();
    }

    if (currentNumber === initialLength + remainingLength) {
      onLastClick();
      setGameComplete(true);
      return;
    }

    if (number <= initialLength) {
      handleInitialNumClick(index);
    } else {
      handleUpcomingNumClick(index);
    }
  };

  const handleCloseModal = () => {
    resetGame();
  };

  return (
    <GameContainer>
      <NextNumber>다음 숫자: {currentNumber}</NextNumber>
      <GameBox $gridLength={gridLength}>
        {initialNums.map((number, index) =>
          number !== null ? (
            <NumberButton
              key={index}
              onClick={() => handleNumberClick(number, index)}
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
        <CompleteModal onClose={handleCloseModal} finalTime={currentTime} />
      )}
    </GameContainer>
  );
};

export default GameBoard;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NextNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black1};
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
