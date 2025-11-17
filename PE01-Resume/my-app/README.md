# PE01 - IPO Model Analysis

## Input

* **Source files:** `App.js`, `Resume.js`, `App.css`, `Resume.css`.
* **Content:** Static resume text (name, contact, sections) written in JSX in `Resume.js`.
* **Styles:** Background color `#bdfb04`, black text, margins, fonts, and layout rules in `Resume.css`. Global page background set to `#454545` in `App.css`.
* **User action:** `npm start` to run the dev server; the app renders automatically in the browser.

## Process

* React mounts `App` into `#root` and imports the `Resume` component.
* The JSX in `Resume.js` compiles to JavaScript and creates a virtual DOM tree.
* React reconciles that tree with the real DOM and applies class names.
* The browser loads `Resume.css` and `App.css`, then computes styles (green background only on `.resume`, centered max-width column).
* Hot reload updates the page when files change.

## Output

* A centered, readable resume “card” with green background (`#bdfb04`), black text, consistent margins, and section headings.
* The page layout matches the sample screenshot shown in the instructions document.

<br>
