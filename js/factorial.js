function calculateFactorial() {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");
  let result = 1;

  if (input === "" || input < 0) {
    output.innerText = "⚠️ Please enter a valid positive number.";
    return;
  }

  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  output.innerText = `${input}! = ${result}`;
}

// Toggle dark/light mode
function setTheme(mode) {
  document.documentElement.setAttribute("data-bs-theme", mode);
}
