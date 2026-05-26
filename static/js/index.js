function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateScrollButton() {
  const button = document.querySelector(".scroll-to-top");
  if (!button) return;
  button.classList.toggle("visible", window.scrollY > 360);
}

document.addEventListener("DOMContentLoaded", () => {
  updateScrollButton();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

window.addEventListener("scroll", updateScrollButton, { passive: true });
