export function deleteCheckedRows(tbody, renderTable) {
  const rowCheckboxes = tbody.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  const idsToDelete = Array.from(rowCheckboxes).map((checkbox) =>
    parseInt(checkbox.dataset.id, 10)
  );

  const latestData = JSON.parse(localStorage.getItem("infoData")) || [];

  const updatedData = latestData.filter(
    (item) => !idsToDelete.includes(item.id)
  );

  localStorage.setItem("infoData", JSON.stringify(updatedData));

  renderTable(updatedData, tbody);
}
