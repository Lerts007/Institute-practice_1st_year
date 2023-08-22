const mobalMenu = document.getElementById("#nav-bar-mobile");
const closeMobalMenu = document.getElementById("#closeMobalMenu");
const openMobalMenu = document.getElementById("#openMobalMenu");

function openMenu() {
  mobalMenu.style.display = "block";
  closeMobalMenu.style.display = "block";
  openMobalMenu.style.display = "none";
}
function closeMenu() {
  mobalMenu.style.display = "none";
  closeMobalMenu.style.display = "none";
  openMobalMenu.style.display = "block";
}
