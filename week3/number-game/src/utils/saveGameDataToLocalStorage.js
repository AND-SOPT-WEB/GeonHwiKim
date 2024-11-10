export const saveGameDataToLocalStorage = (level, playTime) => {
  const currentTime = new Date().toLocaleString();
  const gameData = { currentTime, level, playTime };

  const existingData = JSON.parse(localStorage.getItem("gameData")) || [];

  localStorage.setItem("gameData", JSON.stringify([...existingData, gameData]));
};
