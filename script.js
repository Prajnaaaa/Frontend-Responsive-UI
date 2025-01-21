// Function to adjust page scaling based on screen width
function adjustScale() {
    const width = window.innerWidth;
    let scale = 1;

    if (width <= 600) scale = 0.5;
    else if (width <= 700) scale = 0.75;
    else if (width <= 767) scale = 0.8;
    else if (width <= 1600) scale = 0.9;

    document.body.style.transform = `scale(${scale})`;
}

// Attach resize event to adjust scaling dynamically
window.onresize = adjustScale;
adjustScale();

// Functionality for collapsible left menu
const leftMenu = document.querySelector('.left-menu');
document.querySelector('.navbar').addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
});
