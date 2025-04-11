document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        // Use a slight offset (80px) to account for the fixed navbar
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = target.getBoundingClientRect().top;
        const targetPosition = targetRect - offset;
        window.scrollBy({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Toggle the mobile navigation menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from bubbling up to the document
  navLinks.classList.toggle('active');
});

// Close the nav menu if click occurs outside the navbar
document.addEventListener('click', (event) => {
  // Check if the click happened inside the nav container
  // Adjust the selector as needed to encompass your nav bar area
  if (!event.target.closest('.nav-container')) {
    navLinks.classList.remove('active');
  }
});


  // Navbar active state on scroll
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section, header.hero-about-section");
    const navLinks = document.querySelectorAll(".nav-links li a");
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Dropdown toggle for skills
  const skillDropdownBtn = document.querySelector("#skills .dropbtn");
  const skillDropdown = document.querySelector("#skills .dropdown");
  if (skillDropdownBtn && skillDropdown) {
    skillDropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      skillDropdown.classList.toggle("show");
    });
  }

  // Dropdown toggle for projects
  const projectDropdownBtn = document.querySelector("#projects .dropbtn");
  const projectDropdown = document.querySelector("#projects .dropdown");
  if (projectDropdownBtn && projectDropdown) {
    projectDropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      projectDropdown.classList.toggle("show");
    });
  }

  // Close dropdowns when clicking outside
  window.addEventListener("click", function () {
    document.querySelectorAll(".dropdown").forEach(drop => {
      drop.classList.remove("show");
    });
  });

  // Skill filter logic
  const skillCheckboxes = document.querySelectorAll(".skill-filter-checkbox");
  skillCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterSkills);
  });

  function filterSkills() {
    let checkedValues = Array.from(skillCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach(card => {
      if (checkedValues.length === 0 || checkedValues.includes(card.dataset.category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Project filter logic
  const projectCheckboxes = document.querySelectorAll(".project-filter-checkbox");
  projectCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterProjects);
  });

  function filterProjects() {
    let checkedValues = Array.from(projectCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
      if (checkedValues.length === 0 || checkedValues.includes(card.dataset.category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
