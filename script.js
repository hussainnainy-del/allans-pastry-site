const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".menu-panel");

function activateMenuTab(tabName) {
  const tab = document.querySelector(`.tab[data-tab="${tabName}"]`);
  const panel = document.getElementById(tabName);

  if (!tab || !panel) return;

  tabs.forEach((item) => {
    item.classList.remove("is-active");
    item.setAttribute("aria-selected", "false");
  });

  panels.forEach((item) => {
    item.classList.remove("is-active");
    item.hidden = true;
  });

  tab.classList.add("is-active");
  tab.setAttribute("aria-selected", "true");
  panel.classList.add("is-active");
  panel.hidden = false;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateMenuTab(tab.dataset.tab);
  });
});

document.querySelectorAll("[data-tab-target]").forEach((link) => {
  link.addEventListener("click", () => {
    activateMenuTab(link.dataset.tabTarget);
  });
});
