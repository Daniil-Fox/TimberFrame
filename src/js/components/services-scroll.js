// import { ScrollTrigger } from "gsap/all";
// import { gsap } from "gsap";
// gsap.registerPlugin(ScrollTrigger)


// const itemsTexts = document.querySelectorAll(".services-section__text");

// if (itemsTexts.length > 0) {
//   const line = document.querySelector(".services-section__line");
//   const firstItem = document.querySelector(".services-section__item");
//   let listHeight = document.querySelector(
//     ".services-section__list"
//   ).scrollHeight;
//   window.addEventListener("scroll", () => {
//     itemsTexts.forEach((el) => {
//       if (
//         el.getBoundingClientRect().bottom < line.getBoundingClientRect().bottom
//       ) {
//         el.closest(".services-section__item").classList.add("active");
//       } else {
//         if (el.closest(".services-section__item") != firstItem) {
//           el.closest(".services-section__item").classList.remove("active");
//         }
//       }
//     });
//   }, {passive: true});

//   let mm = gsap.matchMedia();

//   mm.add("(min-width: 769px)", () => {
//     let t1 = gsap.timeline();
//     t1.fromTo(
//       ".services-section__list",
//       {
//         y: () =>
//           -document.querySelector(".services-section__item").offsetHeight,
//       },
//       {
//         y: () =>
//           -document.querySelector(".services-section__list").scrollHeight,
//       }
//     );
//     function onResize(){
//       ScrollTrigger.refresh(true)
//       ScrollTrigger.update()

//     }
//     ScrollTrigger.addEventListener("refreshInit", onResize);
//     ScrollTrigger.create({
//       animation: t1,
//       trigger: ".services-section__line",
//       start: "center center",
//       end: "bottom+=500px",
//       scrub: 0.1,
//       pin: ".services-section__container",
//       invalidateOnRefresh: true,
//     });
//   });

//   if (window.matchMedia("(max-width: 768px)").matches) {
//     firstItem.classList.add("active");
//   }
// }

// // ScrollTrigger.refresh();
