export const saveGameDataToLocalStorage = (level, time) => {
  const playTime = time;
  const currentTime = new Date().toLocaleString();

  localStorage.setItem(
    "gameData",
    JSON.stringify({
      level,
      playTime,
      currentTime,
    })
  );
};
