let basicscreen = document.querySelector("#basic-screen");
let sciscreen = document.querySelector("#scientific-screen");
let btns = document.querySelectorAll(".btn");
let modeBtns = document.querySelectorAll(".mode-btn");
let container = document.querySelector(".container");

let currentScreen = basicscreen; 

document
  .querySelectorAll("#basic-screen, #scientific-screen")
  .forEach((screen) => {
    screen.addEventListener("input", () => {
      let text = "";
      
      for (let val of screen.value) {
        if ("0123456789+-*/().%^!etansicorlgq".includes(val)) {
          text += val;
        }
      }

      let lastChar = text.slice(-1);
      let secondLastChar = text.slice(-2, -1);
      let operators = "+-*/";
      
      if (operators.includes(lastChar) && operators.includes(secondLastChar)) {
        text = text.slice(0, -2) + lastChar;
      }

      screen.value = text;
    });
  });

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    
    try {
      let val = currentScreen.value;
      val = val.replaceAll("log", "Math.log10");
      val = val.replaceAll("sqrt", "Math.sqrt");
      val = val.replaceAll("sin", "Math.sin");
      val = val.replaceAll("cos", "Math.cos");
      val = val.replaceAll("tan", "Math.tan");
      val = val.replaceAll("pi", "Math.PI");
      val = val.replaceAll("^", "**");
      val = val.replaceAll("e", "Math.E");

      currentScreen.value = eval(val);
    } catch {
      currentScreen.value = "Error";
    }
  }
});


const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      
      if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i class="ri-moon-line"></i>';
      }
    });
}

modeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    modeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.dataset.mode === "scientific") {
      container.classList.add("mode-scientific");
      currentScreen = sciscreen;
    } else {
      container.classList.remove("mode-scientific");
      currentScreen = basicscreen;
    }
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let btntext = btn.innerHTML;

    if (btntext === "pi") {
      currentScreen.value += Math.PI;
      return;
    }

    if (btntext === "log") {
      currentScreen.value += "log(";
      return;
    }

    if (btntext === "root") {
      currentScreen.value += "sqrt(";
      return;
    }

    if (btntext === "x^y") {
      currentScreen.value += "^";
      return;
    }

    if (btntext === "sin") {
      currentScreen.value += "sin(";
      return;
    }

    if (btntext === "cos") {
      currentScreen.value += "cos(";
      return;
    }

    if (btntext === "tan") {
      currentScreen.value += "tan(";
      return;
    }

    if (btntext === "e") {
      currentScreen.value += "e";
      return;
    }

    if (btntext !== "AC" && btntext !== '<i class="ri-delete-back-2-line"></i>' && btntext !== "=") {
      if (btntext === "×") btntext = "*";
      if (btntext === "÷") btntext = "/";

      if ("+-*/".includes(currentScreen.value.slice(-1)) && "+-*/".includes(btntext)) {
        currentScreen.value = currentScreen.value.slice(0, -1) + btntext;
        return;
      }

      currentScreen.value += btntext;
    }

    if (btntext === "AC") {
      currentScreen.value = "";
    }

    if (btntext === '<i class="ri-delete-back-2-line"></i>') {
      currentScreen.value = currentScreen.value.slice(0, -1);
    }

    if (btntext === "=") {
      try {
        let val = currentScreen.value;

        val = val.replaceAll("log", "Math.log10");
        val = val.replaceAll("sqrt", "Math.sqrt");
        val = val.replaceAll("sin", "Math.sin");
        val = val.replaceAll("cos", "Math.cos");
        val = val.replaceAll("tan", "Math.tan");
        val = val.replaceAll("pi", "Math.PI");
        val = val.replaceAll("^", "**");
        val = val.replaceAll("e", "Math.E");

        currentScreen.value = eval(val);
      } catch {
        currentScreen.value = "Error";
      }
      return;
    }

    if (btntext === "x!") {
      let number = parseInt(currentScreen.value);
      let fact = 1;

      if (number < 0) {
        currentScreen.value = "Error";
      } else {
        for (let i = 1; i <= number; i++) {
          fact = fact * i;
        }
        currentScreen.value = fact;
      }
    }
  });
});