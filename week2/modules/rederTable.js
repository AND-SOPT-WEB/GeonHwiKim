export const renderTable = (data, tbody) => {
  const rows = data
    .map(
      (item) => `
          <tr>
            <td><input type="checkbox" data-id="${item.id}" /></td>
            <td>${item.name}</td>
            <td>${item.englishName}</td>
            <td><a href="https://github.com/${item.github}" target="_blank">
              ${item.github}
            </a></td>
            <td>${item.gender === "male" ? "남자" : "여자"}</td>
            <td>${item.role}</td>
            <td>${item.firstWeekGroup}</td>
            <td>${item.secondWeekGroup}</td>
          </tr>
        `
    )
    .join("");

  tbody.innerHTML = rows;
};
