const containerHelp = document.querySelector(".helpButton");
const helpForm = document.querySelector(".helpForm");
const closeIconHelp = document.getElementById("closeHelp");

function help() {
  // container.className = "rentFormOn";
  containerHelp.classList.add("helpFormOn");
  containerHelp.classList.remove("helpFormOff");
}

containerHelp.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(helpForm);

  if (!withinBoundaries) {
    deleteClassHelp();
  }
});

closeIconHelp.addEventListener("click", () => {
  deleteClassHelp();
});

document.body.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    deleteClassHelp();
  }
});

const deleteClassHelp = () => {
  containerHelp.classList.remove("helpFormOn");
  containerHelp.classList.add("helpFormOff");
};
