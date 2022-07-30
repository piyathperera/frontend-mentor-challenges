//Toggle Navigation button
const navButton = document.querySelector("button[aria-expanded]");
const navList = document.querySelector(".main-nav-list");
const ariaHiddens = document.querySelectorAll("[aria-hidden]");

function toggleNavigation({ target }) {
    const expanded = navButton.getAttribute("aria-expanded") === "true";
    navButton.setAttribute("aria-expanded", !expanded);

    const isVisible = navList.getAttribute("data-visible") === "true";
    navList.setAttribute("data-visible", !isVisible);

    ariaHiddens.forEach((ariaHidden) => {
        ariaHidden.setAttribute("aria-hidden", ariaHidden.getAttribute("aria-hidden") === "false" ? "true" : "false");

        console.log("hidden", ariaHidden.getAttribute("aria-hidden"));
    });
}

navButton.addEventListener("click", toggleNavigation);
