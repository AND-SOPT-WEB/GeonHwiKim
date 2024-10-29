import { InfoData } from "./constants/constants.js";
import { renderTable } from "./modules/rederTable.js";
import { handleResetBtn, handleSearchBtn } from "./modules/buttonHandlers.js";
import {
  handleCheckAll,
  handleRowCheckboxChange,
} from "./modules/checkboxHandlers.js";
import { setupModalHandlers, closeModal } from "./modules/modalHandlers.js";
import { setupFormHandler } from "./modules/modalFormHandlers.js";
import { deleteCheckedRows } from "./modules/deleteHandler.js";

if (!localStorage.getItem("infoData")) {
  localStorage.setItem("infoData", JSON.stringify(InfoData));
}

const data = JSON.parse(localStorage.getItem("infoData"));
const tbody = document.querySelector("tbody");
const checkAll = document.getElementById("check-all");
const addBtn = document.querySelector(".add-btn");
const modal = document.getElementById("add-modal");
const closeBtn = document.querySelector(".close-btn");
const addForm = document.getElementById("add-form");
const deleteBtn = document.querySelector(".delete-btn");

renderTable(data, tbody);
handleResetBtn(data, tbody);
handleSearchBtn(data, tbody);
handleCheckAll(checkAll, tbody);
handleRowCheckboxChange(checkAll, tbody);

setupModalHandlers(modal, addBtn, closeBtn);
setupFormHandler(addForm, data, tbody, () => closeModal(modal), renderTable);

deleteBtn.addEventListener("click", () => {
  deleteCheckedRows(tbody, renderTable);
});
