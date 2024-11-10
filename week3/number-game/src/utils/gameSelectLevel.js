export const getGameBoardProps = (level) => {
  switch (level) {
    case "level1":
      return { initialLength: 9, remainingLength: 9, gridLength: 3 };
    case "level2":
      return { initialLength: 16, remainingLength: 16, gridLength: 4 };
    case "level3":
      return { initialLength: 25, remainingLength: 25, gridLength: 5 };
    default:
      return { initialLength: 9, remainingLength: 9, gridLength: 3 };
  }
};
