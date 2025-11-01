document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const sections = scrollContainer.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".sidebar a");

  scrollContainer.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // If scrolled past the top of this section
      if (scrollContainer.scrollTop >= sectionTop - 120) {
        const id = section.getAttribute("id");
        // Only assign current if there is a nav link for it
        if (document.querySelector(`.sidebar a[href="#${id}"]`)) {
          current = id;
        }
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
