export function deleteCheckedRows(data, tbody, renderTable) {
  const rowCheckboxes = tbody.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  const rowsToDelete = Array.from(rowCheckboxes).map((checkbox) => {
    const row = checkbox.closest("tr");
    return Array.from(tbody.children).indexOf(row); // tbody 내의 행 인덱스
  });

  rowsToDelete.reverse().forEach((index) => {
    data.splice(index, 1);
  });

  localStorage.setItem("infoData", JSON.stringify(data));

  renderTable(data, tbody);
}
