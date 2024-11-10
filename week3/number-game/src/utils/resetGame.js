import { generateShuffledNumbers } from "./generateShuffledNumbers";

export const resetGame = (initialLength, remainingLength, setFunctions) => {
  const {
    setInitialnums,
    setUpcomingNums,
    setCurrentNumber,
    setGameComplete,
    setClickedIndexes,
    onReset,
  } = setFunctions;

  setInitialnums(generateShuffledNumbers(1, initialLength));
  setUpcomingNums(generateShuffledNumbers(initialLength + 1, remainingLength));
  setCurrentNumber(1);
  setGameComplete(false);
  setClickedIndexes(new Set());
  onReset();
};
