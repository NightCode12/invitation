const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confirmModal = document.getElementById("confirmModal");
const detailsModal = document.getElementById("detailsModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");
const detailsClose = document.getElementById("detailsClose");

const details = {
  when: "February 14, 2026",
  time: "5:00 PM",
  where: "Masah Cafe",
  what: "Dinner Date",
};

const detailWhen = document.getElementById("detailWhen");
const detailTime = document.getElementById("detailTime");
const detailWhere = document.getElementById("detailWhere");
const detailWhat = document.getElementById("detailWhat");

function openModal(el) {
  el.classList.add("show");
  el.setAttribute("aria-hidden", "false");
}

function closeModal(el) {
  el.classList.remove("show");
  el.setAttribute("aria-hidden", "true");
}

function hydrateDetails() {
  detailWhen.textContent = details.when;
  detailTime.textContent = details.time;
  detailWhere.textContent = details.where;
  detailWhat.textContent = details.what;
}

function loopNo() {
  openModal(confirmModal);
}

yesBtn.addEventListener("click", () => {
  hydrateDetails();
  openModal(detailsModal);
});

noBtn.addEventListener("click", loopNo);

confirmNo.addEventListener("click", () => {
  closeModal(confirmModal);
  setTimeout(loopNo, 120);
});

confirmYes.addEventListener("click", () => {
  closeModal(confirmModal);
  hydrateDetails();
  openModal(detailsModal);
});

detailsClose.addEventListener("click", () => {
  closeModal(detailsModal);
});
