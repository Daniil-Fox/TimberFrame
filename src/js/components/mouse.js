const cursorRounded = document.querySelectorAll(".mouse-rotate");

const panoramaSection = document.querySelector(".tour");
const modalTour = document.querySelectorAll('.modal-tour')
const moveCursor = (e) => {
  cursorRounded.forEach(el => el.style.left = e.pageX - panoramaSection.offsetLeft + 'px')
  cursorRounded.forEach(el => el.style.top = e.pageY -  panoramaSection.offsetTop  + 'px')
};

panoramaSection.addEventListener("mousemove", moveCursor);
modalTour.forEach(el => {
  el.addEventListener("mousemove", moveCursor)
})
