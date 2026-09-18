const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

document.querySelectorAll(".wish").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.textContent = button.classList.contains("active") ? "♥" : "♡";
  });
});

document.querySelectorAll(".cart").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "✓";
    button.title = "Added to cart";
  });
});

document.getElementById("headerWishlist").addEventListener("click", event => {
  event.currentTarget.textContent =
    event.currentTarget.textContent === "♡" ? "♥" : "♡";
});
