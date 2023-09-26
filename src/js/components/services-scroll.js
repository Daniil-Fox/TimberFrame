import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";

const itemsTexts = document.querySelectorAll(".services-section__text");
const line = document.querySelector(".services-section__line");
const firstItem = document.querySelector(".services-section__item");
const listHeight = document.querySelector(
  ".services-section__list"
).clientHeight;

window.addEventListener("scroll", () => {
  itemsTexts.forEach((el) => {
    if (
      el.getBoundingClientRect().bottom < line.getBoundingClientRect().bottom
    ) {
      el.closest(".services-section__item").classList.add("active");
    } else {
      if (el.closest(".services-section__item") != firstItem) {
        el.closest(".services-section__item").classList.remove("active");
      }
    }
  });
});


// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("aos-animate");
//     } else {
//       entry.target.classList.remove("aos-animate");
//     }
//   });
// });
// document.querySelectorAll("[data-aos]").forEach((aosElem) => {
//   observer.observe(aosElem);
// });


// const locScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
// });

// locScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length
//       ? locScroll.scrollTo(value, 0, 0)
//       : locScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
// });

// ScrollTrigger.addEventListener("refresh", () => locScroll.update());
// ScrollTrigger.defaults({ scroller: ".smooth-scroll" });

let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  let t1 = gsap.timeline();
  t1.fromTo(
    ".services-section__list",
    { y: -firstItem.offsetHeight },
    { y: -listHeight }
  );

  ScrollTrigger.create({
    animation: t1,
    trigger: ".services-section__line",
    start: "center center",
    end: "bottom+=500px",
    scrub: 0.1,
    pin: ".services-section__container",
    normalize: true,
  });
});

if (window.matchMedia("(max-width: 768px)").matches) {
  firstItem.classList.add("active");
}
// ScrollTrigger.refresh();
