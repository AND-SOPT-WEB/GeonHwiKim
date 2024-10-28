function createNewMember() {
  return {
    name: document.getElementById("name").value,
    engName: document.getElementById("engName").value,
    github: document.getElementById("github").value,
    gender: document.getElementById("gender").value,
    role: document.getElementById("role").value,
    week1: parseInt(document.getElementById("week1").value, 10),
    week2: parseInt(document.getElementById("week2").value, 10),
  };
}

export function setupFormHandler(
  addForm,
  data,
  tbody,
  closeModal,
  renderTable
) {
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newMember = createNewMember();
    data.push(newMember);
    localStorage.setItem("infoData", JSON.stringify(data)); // 로컬 스토리지 업데이트

    renderTable(data, tbody);
    closeModal();
  });
}
