const resumeList = document.querySelectorAll(".resume-list");
const resumeBox = document.querySelectorAll(".resume-box");

const portfolioList = document.querySelectorAll(".portfolio-list");
const portfolioBox = document.querySelectorAll(".portfolio-box");
// resume section when clicking tab-list
resumeList.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBox[idx].classList.add("active");
  });
});

// portfolio section when clicking tab-list
portfolioList.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBox[idx].classList.add("active");
  });
});
