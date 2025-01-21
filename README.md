Step 1: Create the HTML Structure
Create a file named index.html and add the following code:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Webpage</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">Fixed Navbar</nav>
    <div class="container">
        <aside class="left-menu">Left Menu</aside>
        <main class="main-content">Main Content Area</main>
        <aside class="right-panel">Right Panel</aside>
    </div>
    <footer class="footer">Footer</footer>
    <script src="script.js"></script>
</body>
</html>

Step 2: Style with CSS
Create a file named styles.css and add the following code to make the page responsive:

/* General Reset */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
    z-index: 1000;
}

.container {
    display: flex;
    margin-top: 50px; /* Adjust for fixed navbar */
    height: calc(100vh - 100px); /* Adjust for navbar and footer */
}

.left-menu,
.right-panel {
    width: 20%;
    background: #f4f4f4;
    padding: 10px;
    overflow: auto;
}

.main-content {
    width: 60%;
    padding: 10px;
}

.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Collapsible Left Menu */
.left-menu.collapsed {
    width: 50px;
    transition: width 0.3s;
}

.left-menu.collapsed > * {
    display: none;
}

/* Responsive Design */
@media (max-width: 992px) {
    .left-menu, .right-panel {
        width: 15%;
    }
    .main-content {
        width: 70%;
    }
}

@media (max-width: 700px) {
    .container {
        flex-direction: column;
    }
    .left-menu, .right-panel {
        width: 100%;
    }
    .main-content {
        width: 100%;
    }
}

Step 3: Add JavaScript for Responsiveness
Create a file named script.js and add the following code to handle the left menu collapse and screen width scaling:


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


Step 4: Test the Webpage
Save all the files (index.html, styles.css, and script.js) in the same directory.
Open index.html in a browser.
