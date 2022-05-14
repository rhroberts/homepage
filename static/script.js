const mediaQuery = window.matchMedia("(max-width: 376px)");

function handleWidthChange(query) {
  const menu = document.getElementById("menu");
  const menuButton = document.getElementById("menu-button");
  if (query.matches) {
    // add onclick handler to toggle menu display
    menuButton.onclick = () => {
      if (menu.style.display == "") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "";
      }
    };
  } else {
    // remove onclick handler and don't display menu
    menu.style.display = "";
    menuButton.onclick = null;
  }
}
// wait until DOM is loaded before running handler initially
window.onload = () => {
  handleWidthChange(mediaQuery);
};

mediaQuery.addEventListener("change", handleWidthChange);
