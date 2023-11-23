// STARTING AT THE TOP
window.addEventListener("beforeunload", function () {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});

// NAVIGATION BETWEEN SECTIONS
let colors = ["#ff608c", "#fff", "#00c1b5", "#ff6519", "#ffbe00", "#1d3fbb", "#e30512"];
let sections = document.querySelectorAll(".issue");
let menuLinks = document.querySelectorAll("p");

function scrollToSection(i) {
  sections[i].scrollIntoView({ behavior: "smooth" });
  document.body.style.backgroundColor = colors[i];
  const previousMenuLink = document.querySelector("p.active");
  if (previousMenuLink) {
    previousMenuLink.classList.remove("active");
  }
  menuLinks[i].classList.add("active");
}

// FROM MENU LINKS
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", () => {
    scrollToSection(i);
  });
}

// FROM SCROLL
let scrollPosition = 0;
document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && scrollPosition < sections.length - 1) {
    scrollPosition++;
    scrollToSection(scrollPosition);
  } else if (e.deltaY < 0 && scrollPosition > 0) {
    scrollPosition--;
    scrollToSection(scrollPosition);
  }
});
