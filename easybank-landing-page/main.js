//Toggle Navigation button
const navButton = document.querySelector("button[aria-expanded]");
const navList = document.querySelector("ul[aria-hidden]");
const ariaHiddens = document.querySelectorAll("[aria-hidden]");


function toggleNavigation({ target }) {
    // const expanded = navButton.getAttribute("aria-expanded") === "true";
    // navButton.setAttribute("aria-expanded", !expanded);

    navButton.setAttribute("aria-expanded", target.getAttribute("aria-expanded") === "true" ? "false" : "true");
    console.log("expanded", navButton.getAttribute("aria-expanded"));

    ariaHiddens.forEach((ariaHidden) => {
        ariaHidden.setAttribute("aria-hidden", ariaHidden.getAttribute("aria-hidden") === "true" ? "false" : "true");

        console.log("hidden", ariaHidden.getAttribute("aria-hidden"));
    });
    
}

navButton.addEventListener("click", toggleNavigation);
