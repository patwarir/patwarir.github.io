window.onload = (_: Event) => {
    let innerMenu = document.getElementById("innerMenu") as HTMLDivElement;
    let menuButton = document.getElementById("menuButton") as HTMLButtonElement;
    let menuButtonIcon = document.getElementById("menuButtonIcon") as HTMLElement;
    let menuButtonText = document.getElementById("menuButtonText") as HTMLSpanElement;

    menuButtonIcon.classList.add("fa-bars");
    menuButtonText.innerText = "Menu";

    menuButton.onclick = (_: MouseEvent) => {
        if (innerMenu.classList.contains("collapsing"))
            return;

        if (menuButtonIcon.classList.contains("fa-bars")) {
            menuButtonIcon.classList.remove("fa-bars");
            menuButtonIcon.classList.add("fa-times");
        } else if (menuButtonIcon.classList.contains("fa-times")) {
            menuButtonIcon.classList.remove("fa-times");
            menuButtonIcon.classList.add("fa-bars");
        }

        if (menuButtonText.innerText === "Menu")
            menuButtonText.innerText = "Close";
        else if (menuButtonText.innerText === "Close")
            menuButtonText.innerText = "Menu";
    };

    let links = Array.from(document.getElementsByClassName("__MENU_ITEM_LINK__")) as Array<HTMLAnchorElement>;
    let items = Array.from(document.getElementsByClassName("__MENU_ITEM__")) as Array<HTMLElement>;

    if (links.length !== items.length)
        throw new Error("Invalid links and items!");

    const makeLinkActive = (link: HTMLAnchorElement | null) => link?.classList.add("active");
    const removeAllActiveLinks = () => links.forEach(link => link.classList.remove("active"));

    let itemsReversed = Array.from(items).reverse() as Array<HTMLElement>;

    let activeIndex = -1;
    window.onscroll = (_: Event) => {
        let currentIndex = (items.length - 1) - itemsReversed.findIndex((item) => window.scrollY >= item.offsetTop - 10);

        if (currentIndex !== activeIndex) {
            removeAllActiveLinks();
            activeIndex = currentIndex;
            makeLinkActive(links[activeIndex]);
        }
    };
};