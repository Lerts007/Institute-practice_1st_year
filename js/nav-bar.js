const mobalMenu = document.getElementById("nav-bar-mobile");
const modalMenuBlock = document.querySelector("nav-bar-mobile-block");
const closeMobalMenu = document.getElementById("closeMobalMenu");
const openMobalMenu = document.getElementById("openMobalMenu");
const bodyMenuBlock = document.getElementsByTagName("body")[0];

function openMenu() {
  mobalMenu.style.display = "flex";
  closeMobalMenu.style.display = "block";
  openMobalMenu.style.display = "none";
  bodyMenuBlock.style.overflow = "hidden";
}
function closeMenu() {
  mobalMenu.style.display = "none";
  closeMobalMenu.style.display = "none";
  openMobalMenu.style.display = "block";
  bodyMenuBlock.style.overflow = "auto";
}

mobalMenu.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(modalMenuBlock);

  if (!withinBoundaries) {
    closeMenu();
  }
});
