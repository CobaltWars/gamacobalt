// CHARGEMENT
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add('fondu-out');
  setTimeout(() => {
    preloader.style.display = "none";
    document.body.classList.add("active");
  }, 500);
});

// TRANSITION
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    const target = link.getAttribute("target");

    if (target !== "_blank") {
      link.addEventListener("click", event => {
        event.preventDefault();
        const href = link.getAttribute("href");
        document.body.classList.remove("active");
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });
});
