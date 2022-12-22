const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const navBar = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

window.addEventListener("scroll", () => {
  const test = window.scrollY;
  if (test > 80) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
});
