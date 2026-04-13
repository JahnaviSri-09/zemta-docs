
console.log("SIDEBAR JS LOADED");
function bindSidebarClose() {
  document.querySelectorAll(".md-nav__link").forEach(link => {
    link.addEventListener("click", () => {
      const drawer = document.querySelector("#__drawer");
      if (drawer) drawer.checked = false;
    });
  });
}

document.addEventListener("DOMContentLoaded", bindSidebarClose);

// IMPORTANT for mkdocs-material instant navigation
document.addEventListener("DOMContentSwitch", bindSidebarClose);