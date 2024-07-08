window.addEventListener("scroll", () => {
    const navbar = document.getElementById("header");
    if (window.scrollY > 300) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});