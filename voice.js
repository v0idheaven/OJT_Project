const SpeechRecognition = window.SpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  const micBtns = document.querySelectorAll(".mic-btn");

  recognition.continuous = false;
  recognition.lang = "en-US"; 

  micBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("listening")) {
        recognition.stop();
      } else {
        recognition.start();
      }
    });
  });

  recognition.onstart = () => {
    micBtns.forEach((btn) => btn.classList.add("listening"));
  };

  recognition.onend = () => {
    micBtns.forEach((btn) => btn.classList.remove("listening"));
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    processVoiceInput(transcript);
  };

}

function processVoiceInput(text) {
  console.log("Heard:", text);

  if (text.endsWith(".")) {
    text = text.slice(0, -1);
  }

  let shouldCalculate = false;
  if (text.includes("equals") || text.includes("=")) {
    shouldCalculate = true;
  }

  const replacements = {
    "plus": "+",
    "add": "+",
    "minus": "-",
    "into": "*",
    "under root": "sqrt(",
    "subtract": "-",
    "times": "*",
    "multiply": "*",
    "x": "*",
    "divide": "/",
    "over": "/",
    "percent": "%",
    "point": ".",
    "sine": "sin(",
    "cosine": "cos(",
    "cos": "cos(",
    "bracket close": ")",
    "bracketopen": "(",
    "openbracket": "(",
    "closebracket": ")",
    "factorial": "!",
    "tangent": "tan(",
    "log": "log(",
    "root": "sqrt(",
    "power": "^",
    "pi": "pi",
    "one": "1",
    "equals": "=",
    "equal": "=",
    "equal to": "=",
    "clear": "AC",
    "reset": "AC",
    "equals to": "=",
    "tan": "tan(",
    "e": "e"
  };

  for (const [word, symbol] of Object.entries(replacements)) {
    text = text.split(word).join(symbol);
  }

  const allowed = "0123456789" + "+-*/().%^!" + "sincotalgqrpe"; 
  let cleanText = "";

  for (let char of text) {
    if (allowed.includes(char)) {
      cleanText += char;
    }
  }
  
  text = cleanText;

  currentScreen.value += text;

  if (shouldCalculate) {
    if (container.classList.contains("mode-scientific")) {
      document.querySelector("#sci-pad .equals").click();
    } else {
      document.querySelector("#basic-pad .equals").click();
    }
  }
}