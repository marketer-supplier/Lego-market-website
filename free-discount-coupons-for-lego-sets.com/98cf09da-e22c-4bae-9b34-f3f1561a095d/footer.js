// [SEARCH POPUP]
const searchOpen = document.querySelectorAll(".open-search");
const searchContainer = document.querySelector(".search-box");
const searchClose = document.querySelector(".search-close");
searchOpen.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    searchContainer.classList.add("active-search");
    document.querySelector("body").classList.add("h-screen");
    document.querySelector("body").classList.add("overflow-hidden");
  });
});

searchContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("active-search")) {
    searchContainer.classList.remove("active-search");
    document.querySelector("body").classList.remove("h-screen");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
});

searchClose.addEventListener("click", () => {
  searchContainer.classList.remove("active-search");
  document.querySelector("body").classList.remove("h-screen");
  document.querySelector("body").classList.remove("overflow-hidden");
});

const dropdownTrigger = document.querySelectorAll(".dropdown-trigger");
dropdownTrigger.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.preventDefault();
    const hasDropdown = dropdown.parentElement;
    hasDropdown.classList.toggle("active-dropdown");
  });
});

window.addEventListener("click", (event) => {
  if (event.target.closest(".has-dropdown")) {
    return;
  } else {
    document.querySelectorAll(".has-dropdown").forEach((el) => {
      el.classList.remove("active-dropdown");
    });
  }
});

// [Dropdowns]
const hasMobileDropdown = document.querySelectorAll(".has-mobile-dropdown");
hasMobileDropdown.forEach((drop) => {
  drop.addEventListener("click", (event) => {
    // event.preventDefault();
    const dropMenu = drop.querySelector(".dropdown-mobile-menu");
    const dropMenuHeight = dropMenu.scrollHeight;
    drop.classList.toggle("active-mobile-dropdown");
    if (dropMenu.hasAttribute("style")) {
      dropMenu.removeAttribute("style");
    } else {
      dropMenu.style.height = `${dropMenuHeight}px`;
    }
  });
});

const dropdownMenuItem = document.querySelectorAll(".dropdown-menu a");
dropdownMenuItem.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    document.querySelectorAll(".has-dropdown").forEach((el) => {
      el.classList.remove("active-dropdown");
    });
  });
});

// [OPEN INFO]
const openInfo = document.querySelector(".open-info");
const infoContainer = document.querySelector(".sidebar");
const popupClose = document.querySelectorAll(".close-popup");
const openMenu = document.querySelector(".open-menu");
const menuContainer = document.querySelector(".mmenu");


openMenu.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("body").classList.add("h-screen");
  document.querySelector("body").classList.add("overflow-hidden");
  menuContainer.classList.add("active-menu");
});

popupClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuContainer.classList.remove("active-menu");
    infoContainer.classList.remove("active-side");
    document.querySelector("body").classList.remove("h-screen");
    document.querySelector("body").classList.remove("overflow-hidden");
  });
});

openInfo.addEventListener("click", () => {
  infoContainer.classList.add("active-side");
  document.querySelector("body").classList.add("h-screen");
  document.querySelector("body").classList.add("overflow-hidden");
});

// [STICKY SIDEBAR]
var wrapper = document.getElementById("wrapper"),
  main = document.getElementById("main"),
  sidebar = document.getElementById("sc");

window.onscroll = function () {
  var sc = document.getElementById("sc");

  if (!sc) return;

  sc.setAttribute("style", "display:block;width:" + document.getElementById("sidebar").offsetWidth + "px");
  sc.style.width = document.getElementById("sidebar").offsetWidth;
  //if sidebar smaller than main
  if (sidebar.offsetHeight < main.offsetHeight) {
    //if sidebar smaller than screen - stick to top rather than bottom
    if (sidebar.offsetHeight < window.innerHeight) {
      if (wrapper.getBoundingClientRect().bottom < window.innerHeight && wrapper.getBoundingClientRect().bottom < sidebar.offsetHeight + 95) {
        wrapper.classList.remove("fix-top-VP");
        wrapper.classList.add("flex-bottom");
      } else if (wrapper.getBoundingClientRect().top < 95) {
        wrapper.classList.add("fix-top-VP");
        wrapper.classList.remove("flex-bottom");
      } else {
        wrapper.classList.remove("fix-top-VP");
        wrapper.classList.remove("flex-bottom");
      }
    }
  }
};