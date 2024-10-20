/**** ---- Menu responsive ----- ****/
const checkbox = document.getElementById("check");
const nav = document.querySelector(".navbar");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    nav.classList.add("active");
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    nav.classList.remove("active");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

/**** --- Testomonials Slide ---- ****/

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      740: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 3
      },
    }
  });
});
