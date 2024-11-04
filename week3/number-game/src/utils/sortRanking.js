export const sortRanking = (data) => {
  return data.sort((a, b) => {
    if (b.level === a.level) {
      return parseFloat(a.playTime) - parseFloat(b.playTime);
    }
    return b.level.localeCompare(a.level);
  });
};
