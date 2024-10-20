import { InfoData } from "../constants/constants.js";

if (!localStorage.getItem("infoData")) {
  localStorage.setItem("infoData", JSON.stringify(InfoData));
}

const data = JSON.parse(localStorage.getItem("infoData"));
