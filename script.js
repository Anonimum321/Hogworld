/* ---------- Nav Menu Script ---------- */

const navImages = document.querySelectorAll(".flex-image");

function toggleOpen() {
  this.classList.toggle("flex-open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

navImages.forEach((navImage) => navImage.addEventListener("click", toggleOpen));
navImages.forEach((navImage) =>
  navImage.addEventListener("transitionend", toggleActive)
);

/* ---------- Clock Script ---------- */

const secondClock = document.querySelector(".seconds");
const minClock = document.querySelector(".mins");
const hourClock = document.querySelector(".hours");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondClockDegrees = (second / 60) * 360 + 90;
  secondClock.style.transform = `rotate(${secondClockDegrees}deg)`;

  const min = now.getMinutes();
  const minClockDegrees = (min / 60) * 360 + 90;
  minClock.style.transform = `rotate(${minClockDegrees}deg)`;

  const hour = now.getHours();
  const hourClockDegrees = (hour / 12) * 360 + 90;
  hourClock.style.transform = `rotate(${hourClockDegrees}deg)`;
}

setInterval(setDate, 1000);

/* ---------- Nav Script ---------- */

const navSlideHomePage = () => {
  const navBurger = document.querySelector(".nav-bar-burger");
  const navBar = document.querySelector(".nav-bar-list");
  const navBurgerInc = document.querySelectorAll(".nav-bar-list li");
  const navMarginBottom = document.querySelector(".main-page");

  navBurger.addEventListener("click", () => {
    // Toggle Nav
    navBar.classList.toggle("nav-bar-list-active");
    navMarginBottom.classList.toggle("main-active");
    // Animate Links
    navBurgerInc.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });

    // Burger Animation
    navBurger.classList.toggle("nav-bar-burger-inc");
  });
};

navSlideHomePage();
