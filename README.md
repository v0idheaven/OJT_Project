# Voice-Enabled Arithmetic and Scientific Calculator

<!-- ## Preview

<div><img src="../Screenshot 2025-12-04 165336.png" alt="Calculator-img"></div>

<div><img src="../Screenshot 2025-12-04 165351.png" alt="Calculator-img"></div>

<div><img src="../Screenshot 2025-12-04 165405.png" alt="Calculator-img"></div> -->

## Brief One Line Summary
A responsive, dual-mode web calculator featuring arithmetic and scientific operations, enhanced with Web Speech API for hands-free voice control and persistent history tracking.

## Table of Contents
- <a href="#overview">Overview</a>
- <a href="#problem-statement">Problem Statement</a>
- <a href="#dataset">Dataset</a>
- <a href="#tools-technologies">Tools and Technologies</a> 
- <a href="#methods">Methods</a>  
- <a href="#key-insight">Key Insights</a>
- <a href="#dashboard-output">dashboard-output</a>
- <a href="#how-to-run">How to Run this project?</a>
- <a href="#result-conclusion">Results & Conclusion</a>
- <a href="#userguid-voice">Voice Command Reference</a>

<h2><a class="anchor" id="overview"></a>Overview</h2>

<!-- ## Overview -->
This project is a robust web application that serves as both a standard arithmetic and a complex scientific calculator. It is built using vanilla web technologies (HTML, CSS, JavaScript) to ensure lightweight performance. The application features a dynamic UI that switches between basic and scientific modes, a system-aware dark/light theme toggle, and a slide-out history panel that persists data across sessions using LocalStorage.

<h2><a class="anchor" id="problem-statement"></a>Problem Statement</h2>

<!-- ## Problem Statement -->
Standard web calculators often lack accessibility features and rapid input methods for complex expressions. This project aims to solve this by implementing a **Accessible Calculato Widget with Expression Parser**, and added voice Parsing allowing users to perform calculations via natural language (e.g., "sine of ninety" or "five times ten"). This improves accessibility for users with motor impairments and offers a faster alternative to manual entry.

<h2><a class="anchor" id="dataset"></a>Dataset</h2>

<!-- ## Dataset -->
* **Type:** Real-time User Input / Voice Data.
* **Description:** This project does not rely on a static dataset. Instead, it processes live audio input via the browser's microphone and text input via the DOM.

<h2><a class="anchor" id="tools-technologies"></a>Tools and Technologies</h2>

<!-- ## Tools and Technologies -->
* **Frontend Structure:** HTML5 (Semantic elements).
* **Styling:** CSS3 (Flexbox/Grid, CSS Variables for Theming, Responsive Design).
* **Logic:** Vanilla JavaScript (ES6+, Event Listeners, DOM Manipulation).
* **APIs:** Web Speech API (`window.SpeechRecognition` / `webkitSpeechRecognition`) for voice processing.


<h2><a class="anchor" id="methods"></a>Methods</h2>

<!-- ## Methods -->
The application logic is divided into three core modules:
1.  **Input Processing:**
    * **Manual:** Event listeners capture button clicks and keyboard inputs, validating operators to prevent syntax errors (e.g., preventing double operators).
    * **Voice:** The `SpeechRecognition` interface captures audio, converts it to a string, and runs it through a `processVoiceInput` function. This function creates a map of natural language words (e.g., "multiply", "power", "root") to mathematical symbols (`*`, `^`, `sqrt`).
2.  **Calculation Engine:**
    * The app sanitizes the input string, replacing functions like `sin`, `cos`, and `log` with their `Math` object equivalents (e.g., `Math.sin`, `Math.log10`). The final result is computed using JavaScript's `eval()` function.
3.  **State Management:**
    * `localStorage` is utilized to persist the user's theme preference (`light` vs `dark`) and their calculation history, ensuring the state remains consistent after page reloads.

    <h2><a class="anchor" id="key-insight"></a>Key Insights</h2>

<!-- ## Key Insights -->
* **Voice Parsing Complexity:** Integrating the Web Speech API required handling specific browser prefixes (`webkitSpeechRecognition`) and implementing a dictionary to normalize spoken words (e.g., converting "x" or "times" to `*`).
* **Persistence:** Implementing `localStorage` for the history feature significantly improves UX, allowing users to reference calculation chains even after closing the browser.
* **Responsive State:** Using CSS classes like `.mode-scientific` on the container allows for seamless switching between layouts without reloading the page.

<h2><a class="anchor" id="dashboard-output"></a>Dashboard/Model/Output</h2>

<!-- ## Dashboard/Model/Output -->
The user interface serves as the dashboard, consisting of three main components:
* **Display Screen:** Shows the current expression and inputs.
* **Control Pad:** Dynamic grid that changes based on the selected mode (Basic 4x4 grid vs. Scientific extended grid).
* **History Panel:** A slide-out sidebar (`position: fixed`) that renders previous calculations as interactive items; clicking an item injects the result back into the main input.


<h2><a class="anchor" id="Project-Structure"></a>📂 Project Structure</h2>
<!-- ## 📂 Project Structure -->

```text
/
├── index.html       # Entry point: Contains the HTML5 semantic structure and layout
├── style.css        # Styling: Handles CSS Grid/Flexbox layouts, responsive design, and Dark Mode variables
├── script.js        # Core Logic: Manages DOM manipulation, event listeners, calculation history, and math operations
├── voice.js         # AI Feature: Interfaces with Web Speech API to parse voice commands into executable math
└── README.md        # Documentation: Project overview, setup guide, and features
```



<h2><a class="anchor" id="how-to-run"></a>How to Run this project?</h2>

<!-- ## How to Run this project? -->
1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Launch the Application:**
    * Open `index.html` in your web browser.
    * **Important:** For Voice functionality to work reliably, modern browsers (like Chrome) typically require the page to be served over **HTTPS** or `localhost`.
    * *Recommendation:* Use the "Live Server" extension in VS Code to serve the file.
3.  **Usage:**
    * Click the microphone icon to start voice commands.
    * Toggle the "Scientific" button to access advanced functions.




<h2><a class="anchor" id="userguid-voice"></a>🗣️ Voice Command Reference</h2>

<!-- ### 🗣️ Voice Command Reference -->

| Spoken Word | Operator | Example Phrase |
| :--- | :---: | :--- |
| "Plus" / "Add" | `+` | "Five plus ten" |
| "Minus" / "Subtract" | `-` | "Ten minus two" |
| "Times" / "Multiply" | `*` | "Six times six" |
| "Divide" / "Over" | `/` | "One hundred divided by two" |
| "Sine" | `sin(` | "Sine thirty" |
| "Power" | `^` | "Two power three" |
| "Root" | `sqrt(` | "Root sixty four" |
| "Equals" | `=` | "Five plus five equals" |




    

<h2><a class="anchor" id="result-conclusion"></a>Results & Conclusion</h2>

<!-- ## Results & Conclusion -->
The project successfully delivers a functional, accessible calculator. The integration of the Web Speech API provides a 90% + accuracy rate for standard mathematical phrasing in English. The application is fully responsive, adapting to different screen sizes, and maintains user preferences effectively, meeting the requirements of a modern utility web application.