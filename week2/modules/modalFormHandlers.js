const englishRegex = /^[a-zA-Z]+$/;
const githubRegex = /^[a-zA-Z0-9-]+$/;

function isFormValid() {
  const requiredFields = [
    "name",
    "englishName",
    "github",
    "gender",
    "role",
    "firstWeekGroup",
    "secondWeekGroup",
  ];

  const allFieldsFilled = requiredFields.every((id) => {
    const element = document.getElementById(id);
    return element && element.value.trim() !== "";
  });

  if (!allFieldsFilled) {
    alert("모든 필수 항목을 입력해주세요.");
    return false;
  }

  const englishName = document.getElementById("englishName").value;
  if (!englishRegex.test(englishName)) {
    alert("영문 이름은 영어로만 입력해 주세요.");
    return false;
  }

  const github = document.getElementById("github").value;
  if (!githubRegex.test(github)) {
    alert("GitHub ID는 영문자, 숫자, 하이픈만 포함할 수 있습니다.");
    return false;
  }

  return true;
}

function createNewMember() {
  return {
    name: document.getElementById("name").value,
    englishName: document.getElementById("englishName").value,
    github: document.getElementById("github").value,
    gender: document.getElementById("gender").value,
    role: document.getElementById("role").value,
    firstWeekGroup: parseInt(
      document.getElementById("firstWeekGroup").value,
      10
    ),
    secondWeekGroup: parseInt(
      document.getElementById("secondWeekGroup").value,
      10
    ),
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

    if (!isFormValid()) return;

    const newMember = createNewMember();
    data.push(newMember);
    localStorage.setItem("infoData", JSON.stringify(data));
    renderTable(data, tbody);
    closeModal();
  });
}
