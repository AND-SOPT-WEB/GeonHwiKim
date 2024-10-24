import { InfoData } from "./constants/constants.js";
import { renderTable } from "./modules/rederTable.js";
import { handleResetBtn, handleSearchBtn } from "./modules/buttonHandlers.js";

if (!localStorage.getItem("infoData")) {
  localStorage.setItem("infoData", JSON.stringify(InfoData));
}

const data = JSON.parse(localStorage.getItem("infoData"));

const tbody = document.querySelector("tbody");

renderTable(data, tbody);

handleResetBtn(data, tbody);
handleSearchBtn(data, tbody);
