export const handleNumberClick = ({
  number,
  currentNumber,
  initialLength,
  remainingLength,
  handleInitialNumClick,
  handleUpcomingNumClick,
  setGameComplete,
  onFirstClick,
  onLastClick,
}) => {
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
    handleInitialNumClick();
  } else {
    handleUpcomingNumClick();
  }
};
