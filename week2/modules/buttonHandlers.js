import { renderTable } from "./rederTable.js";
import { searchFilter } from "./searchFilter.js";

export const handleResetBtn = (data, tbody) => {
  document.querySelector(".reset-btn").addEventListener("click", () => {
    document
      .querySelectorAll("input, select")
      .forEach((input) => (input.value = ""));
    const data = JSON.parse(localStorage.getItem("infoData")) || [];
    renderTable(data, tbody);
  });
};

export const handleSearchBtn = (data, tbody) => {
  document.querySelector(".search-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("infoData")) || [];
    const filteredData = searchFilter(data);
    renderTable(filteredData, tbody);
  });
};
