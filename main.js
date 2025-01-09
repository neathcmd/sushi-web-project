<<<<<<< refs/remotes/origin/new
//button sign up
document.getElementById("sign-up-btn").addEventListener("click", function () {
  alert("Sign Up button clicked!");
=======
// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Handle active menu item
const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    event.target.classList.add("active");
  });
});

// Progress Bar Logic
window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  document.querySelector(".progress-bar").style.width = `${progress}%`;
});

// Add event listener for all "View More Details" buttons
document.querySelectorAll(".view-details-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");
    const allCards = document.querySelectorAll(".product-card");

    // Close all other cards
    allCards.forEach((c) => {
      if (c !== card) {
        c.classList.remove("active");
        c.querySelector(".view-details-btn").textContent = "View More Details";
      }
    });

    // Toggle the clicked card
    card.classList.toggle("active");
    button.textContent = card.classList.contains("active")
      ? "Hide Details"
      : "View More Details";
  });
>>>>>>> local
});
