const containerRent = document.querySelector(".rentButton");
const rentForm = document.querySelector(".rentForm");
const closeIconRent = document.getElementById("closeRent");

const modalWindowHTML = "<div class='modalWindow'></div>";

function rent() {
  // container.className = "rentFormOn";
  containerRent.classList.add("rentFormOn");
  containerRent.classList.remove("rentFormOff");
}

containerRent.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(rentForm);

  if (!withinBoundaries) {
    deleteClassRent();
  }
});

closeIconRent.addEventListener("click", () => {
  deleteClassRent();
});

document.body.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    deleteClassRent();
  }
});

const deleteClassRent = () => {
  containerRent.classList.remove("rentFormOn");
  containerRent.classList.add("rentFormOff");
};
