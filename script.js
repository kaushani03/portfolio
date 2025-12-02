function toggleMenu() {
    let links = document.getElementById("nav-links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
        links.style.flexDirection = "column";
    }
}
