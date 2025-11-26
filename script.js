const leftarrow = document.getElementById("leftarrow");
const rightarrow = document.getElementById("rightarrow");
const trendingDiv = document.getElementById("trending-div");

rightarrow.addEventListener("click", () => {
  trendingDiv.scrollBy({
    left: 600,
    behavior: "smooth",
  });
});

leftarrow.addEventListener("click", () => {
  trendingDiv.scrollBy({
    left: -600,
    behavior: "smooth",
  });
});

trendingDiv.addEventListener("scroll", updateArrows);

rightarrow.addEventListener("click", () => setTimeout(updateArrows, 300));
leftarrow.addEventListener("click", () => setTimeout(updateArrows, 300));

updateArrows();

function updateArrows() {
  const maxScrollLeft = trendingDiv.scrollWidth - trendingDiv.clientWidth;

  if (trendingDiv.scrollLeft <= 0) {
    leftarrow.style.opacity = "0";
    leftarrow.style.pointerEvents = "none";
  } else {
    leftarrow.style.opacity = "1";
    leftarrow.style.pointerEvents = "auto";
  }

  if (trendingDiv.scrollLeft >= maxScrollLeft) {
    rightarrow.style.opacity = "0";
    rightarrow.style.pointerEvents = "none";
  } else {
    rightarrow.style.opacity = "1";
    rightarrow.style.pointerEvents = "auto";
  }
}

const allDetails = document.querySelectorAll(".accordion details");

allDetails.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      allDetails.forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});
