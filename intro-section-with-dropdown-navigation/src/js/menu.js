const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#menu");

toggle.addEventListener("click", () => {

    const isVisible = menu.getAttribute("data-visible");

    if (isVisible === "false") {
        menu.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded",true);
    } else {
        menu.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expanded", false);
    }

});

console.log("this works externally?");
console.log("this works externally copied and changed?");
