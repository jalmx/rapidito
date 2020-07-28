 const active = "is-active";

document.addEventListener("click", (e) => {
  if (e.target.className.includes("hamburger")) {
    const btn = document.getElementById("hamburger");
    btn.classList.toggle(active);
    const menu = document.getElementById("menu");
    menu.style.display = btn.classList.contains(active) ? "flex" : "none";
    menu.style.opacity = btn.classList.contains(active) ? "1" : "0";
  }
});

window.addEventListener("resize", (e) => {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("hamburger");

  menu.style.opacity =(menu && (window.innerWidth >= 555)) || btn.classList.contains(active) ? "1": "0"
  menu.style.display =(menu && (window.innerWidth >= 555)) || btn.classList.contains(active) ? "flex" : "none";
});
