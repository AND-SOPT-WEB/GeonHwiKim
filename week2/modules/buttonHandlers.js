import { renderTable } from "./rederTable.js";
import { searchFilter } from "./searchFilter.js";

export const handleResetBtn = (data, tbody, checkAll) => {
  document.querySelector(".reset-btn").addEventListener("click", () => {
    document
      .querySelectorAll("input, select")
      .forEach((input) => (input.value = ""));
    const data = JSON.parse(localStorage.getItem("infoData")) || [];
    renderTable(data, tbody);

    checkAll.checked = false;
    tbody.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
};

export const handleSearchBtn = (data, tbody, checkAll) => {
  document.querySelector(".search-btn").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("infoData")) || [];
    const filteredData = searchFilter(data);
    renderTable(filteredData, tbody);

    checkAll.checked = false;
    tbody.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
};
