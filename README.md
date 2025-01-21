# Responsive Webpage

This repository contains the implementation of a responsive webpage as described in the Frontend Development task. The project demonstrates the use of HTML, CSS, and JavaScript to create a user-friendly, responsive layout with dynamic scaling and collapsible sections.


## Features

1. **Fixed Navbar:**
   - The navbar remains fixed at the top of the page during scrolling.

2. **Three Sections Below Navbar:**
   - Left Menu
   - Main Content Area
   - Right-Side Panel

3. **Footer:**
   - A footer is included at the bottom of the page and remains fixed.

4. **Collapsible Left Menu:**
   - The left menu can be toggled (collapsed/expanded).

5. **Dynamic Page Scaling:**
   - JavaScript dynamically adjusts the webpage's scale based on screen width:
     - **992px to 1600px:** Shrinks to 90%.
     - **700px to 767px:** Shrinks to 80%.
     - **600px to 700px:** Shrinks to 75%.
     - **<= 600px:** Shrinks to 50%.

---

## File Structure

```
Frontend/
├── index.html      # HTML structure of the webpage
├── styles.css      # CSS styles for layout and responsiveness
├── script.js       # JavaScript for interactivity and dynamic scaling
```

---

## How to Run

1. Clone this repository or download the files.
2. Ensure all files (`index.html`, `styles.css`, `script.js`) are in the same directory.
3. Open the `index.html` file in any modern web browser.

---

## Preview

### Desktop View:
- Navbar fixed at the top.
- Left Menu, Main Content Area, and Right Panel side by side.

### Mobile View:
- Layout adjusts dynamically for smaller screens.
- Left Menu and Right Panel stack vertically above and below the Main Content Area.

---

## Code Highlights

### HTML Structure

```html
<nav class="navbar">Fixed Navbar</nav>
<div class="container">
    <aside class="left-menu">Left Menu</aside>
    <main class="main-content">Main Content Area</main>
    <aside class="right-panel">Right Panel</aside>
</div>
<footer class="footer">Footer</footer>
```

### CSS for Responsiveness

```css
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
```

### JavaScript for Scaling and Collapsible Menu

```javascript
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
```

---

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and responsiveness.
- **JavaScript**: For interactivity and dynamic scaling.


