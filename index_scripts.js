"use strict";
window.onload = (e) => {
    let menuButton = document.getElementById("menuButton");
    let menuButtonIcon = document.getElementById("menuButtonIcon");
    let menuButtonText = document.getElementById("menuButtonText");
    let phoneMenu = document.getElementById("phoneMenu");
    menuButtonIcon.classList.add("fa-bars");
    menuButtonText.innerText = "Menu";
    menuButton.onclick = (e) => {
        if (phoneMenu.classList.contains("collapsing"))
            return;
        if (menuButtonIcon.classList.contains("fa-bars")) {
            menuButtonIcon.classList.remove("fa-bars");
            menuButtonIcon.classList.add("fa-times");
        }
        else if (menuButtonIcon.classList.contains("fa-times")) {
            menuButtonIcon.classList.remove("fa-times");
            menuButtonIcon.classList.add("fa-bars");
        }
        if (menuButtonText.innerText === "Menu")
            menuButtonText.innerText = "Close";
        else if (menuButtonText.innerText === "Close")
            menuButtonText.innerText = "Menu";
    };
    let links = Array.from(document.getElementsByClassName("__MENU_ITEM_LINK__"));
    let items = Array.from(document.getElementsByClassName("__MENU_ITEM__"));
    if (links.length !== items.length)
        throw new Error("Invalid links and items!");
    const makeLinkActive = (link) => link === null || link === void 0 ? void 0 : link.classList.add("active");
    const removeAllActiveLinks = () => links.forEach(link => link.classList.remove("active"));
    let itemsReversed = Array.from(items).reverse();
    let activeIndex = -1;
    window.onscroll = (e) => {
        let currentIndex = (items.length - 1) - itemsReversed.findIndex((item) => window.scrollY >= item.offsetTop - 10);
        if (currentIndex !== activeIndex) {
            removeAllActiveLinks();
            activeIndex = currentIndex;
            makeLinkActive(links[activeIndex]);
        }
    };
};
//# sourceMappingURL=index_scripts.js.map