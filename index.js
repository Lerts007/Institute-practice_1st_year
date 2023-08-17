const carousel = document.querySelector(".infoRent");
const arrowIcons = document.querySelectorAll(".blockRent i");
const firstYacht = document.querySelectorAll(".yacht")[0];

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstYachtWidth = firstYacht.clientWidth + 20;
    carousel.scrollLeft += icon.id === "left" ? -firstYachtWidth : firstYachtWidth;
    setTimeout(() => showHidwIcons(), 60);
  });
});

const showHidwIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.background = carousel.scrollLeft === 0 ? "grey" : "#ad6767";
  arrowIcons[1].style.background = carousel.scrollLeft == scrollWidth + 1 ? "grey" : "#ad6767";
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHidwIcons();
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
