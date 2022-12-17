const navbarList = document.querySelector(".navbar-list");
navbarList.addEventListener("click", (e) => {
  const current = document.querySelector(".active");
  current.classList.remove("active");
  e.target.parentNode.classList.add("active");
});
