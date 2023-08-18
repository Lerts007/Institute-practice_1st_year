const container = document.querySelector(".rentButton");
const buttonForm = document.querySelector(".rentButtonForm");
const closeIcon = document.getElementById("close");

const modalWindowHTML = "<div class='modalWindow'></div>";

function rent() {
  // container.className = "rentButtonOn";
  container.classList.add("rentButtonOn");
  container.classList.remove("rentButtonOff");
}

container.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(buttonForm);

  if (!withinBoundaries) {
    deleteClass();
  }
});

closeIcon.addEventListener("click", () => {
  deleteClass();
});

document.body.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    deleteClass();
  }
});

const deleteClass = () => {
  container.classList.remove("rentButtonOn");
  container.classList.add("rentButtonOff");
};
