export function handleCheckAll(checkAll, tbody) {
  checkAll.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    const rowCheckboxes = tbody.querySelectorAll('input[type="checkbox"]');

    rowCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });
}

export function handleRowCheckboxChange(checkAll, tbody) {
  tbody.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      const allChecked = Array.from(
        tbody.querySelectorAll('input[type="checkbox"]')
      ).every((checkbox) => checkbox.checked);

      checkAll.checked = allChecked;
    }
  });
}
