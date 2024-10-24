import { InfoData } from "./constants/constants.js";
import { renderTable } from "./modules/rederTable.js";
import { handleResetBtn, handleSearchBtn } from "./modules/buttonHandlers.js";
import {
  handleCheckAll,
  handleRowCheckboxChange,
} from "./modules/checkboxHandlers.js";

if (!localStorage.getItem("infoData")) {
  localStorage.setItem("infoData", JSON.stringify(InfoData));
}

const data = JSON.parse(localStorage.getItem("infoData"));
const tbody = document.querySelector("tbody");
const checkAll = document.getElementById("check-all");

renderTable(data, tbody);
handleResetBtn(data, tbody);
handleSearchBtn(data, tbody);

handleCheckAll(checkAll, tbody);
handleRowCheckboxChange(checkAll, tbody);
