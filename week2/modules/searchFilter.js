export const searchFilter = (data) => {
  const nameFilter = document.querySelector("#name-filter").value.toLowerCase();
  const engNameFilter = document
    .querySelector("#eng-name-filter")
    .value.toLowerCase();
  const githubFilter = document
    .querySelector("#github-filter")
    .value.toLowerCase();
  const genderFilter = document.querySelector("#gender-filter").value;
  const roleFilter = document.querySelector("#role-filter").value;

  const week1Filter = parseInt(
    document.querySelector("#week1-filter").value,
    10
  );
  const week2Filter = parseInt(
    document.querySelector("#week2-filter").value,
    10
  );

  return data.filter((item) => {
    return (
      (!nameFilter || item.name.toLowerCase().includes(nameFilter)) &&
      (!engNameFilter ||
        item.englishName.toLowerCase().includes(engNameFilter)) &&
      (!githubFilter || item.github.toLowerCase().includes(githubFilter)) &&
      (!genderFilter ||
        (genderFilter === "남자"
          ? item.gender === "male"
          : item.gender === "female")) &&
      (!roleFilter || item.role === roleFilter) &&
      (!week1Filter || item.firstWeekGroup === week1Filter) &&
      (!week2Filter || item.secondWeekGroup === week2Filter)
    );
  });
};
