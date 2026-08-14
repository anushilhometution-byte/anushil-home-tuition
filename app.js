function page(sectionId) {
  // Sabhi sections hide karo
  const sections = document.querySelectorAll("main > section");

  sections.forEach(section => {
    section.style.display = "none";
    section.classList.remove("active");
  });

  // Selected section show karo
  const selected = document.getElementById(sectionId);

  if (selected) {
    selected.style.display = "block";
    selected.classList.add("active");
  }

  // Top par le jao
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Page load hone par Home open rahe
document.addEventListener("DOMContentLoaded", function () {
  page("home");
});
