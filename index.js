let burgerBtn = document.querySelector(".burger__button");
let header = document.querySelector(".header");
burgerBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
