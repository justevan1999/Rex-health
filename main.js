document.addEventListener("DOMContentLoaded", () => {
  const menu_toggle = document.getElementById("menu_toggle");
  menu_toggle.addEventListener("click", () => {
    const mobile_nav = document.getElementById("sm_ul");
    mobile_nav.classList.toggle("show_menu");
  });

  // Highlight the current page in the navigation menu
  const currentPage = window.location.pathname;
  console.log("Current Page:", currentPage);

  const navLinks = document.querySelectorAll("nav ul li a");

  // Default: Highlight the "Home" link
  const homeLink = document.querySelector("nav ul li a[href='/']");
  homeLink.classList.add("hideee");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Check if the current page exactly matches the link path
    if (currentPage === linkPath) {
      link.classList.add("hideee");
    } else {
      link.classList.remove("hideee");
    }
  });
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const chevron = element.querySelector(".chevron");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    chevron.classList.remove("up");
    chevron.classList.add("down");
  } else {
    answer.style.display = "block";
    chevron.classList.remove("down");
    chevron.classList.add("up");
  }
}

const textElement = document.getElementById('text');
if (textElement) {
  let texts = ["Boundaries", "Stress", "Limit", "Borders"];
  let index = 0;

  function swapText() {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
  }

  setInterval(swapText, 3000);
}


