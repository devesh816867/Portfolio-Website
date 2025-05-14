// Scroll to Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrollToTopButton.style.display = "block"; // Show button when scrolled 100px
  } else {
    scrollToTopButton.style.display = "none"; // Hide button when near the top
  }
};

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll back to the top
});

