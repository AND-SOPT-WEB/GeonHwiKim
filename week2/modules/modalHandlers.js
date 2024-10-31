export function openModal(modal) {
  modal.classList.remove("hidden");
  modal.style.display = "block";
}

export function closeModal(modal) {
  modal.style.display = "none";
}

export function setupModalHandlers(modal, addBtn, closeBtn) {
  addBtn.addEventListener("click", () => openModal(modal));

  closeBtn.addEventListener("click", () => closeModal(modal));

  window.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
}
