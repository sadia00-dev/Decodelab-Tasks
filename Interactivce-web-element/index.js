const themeBtn = document.getElementById("themeBtn");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

let counter = 0;

// Dark Mode Toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Counter
increase.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});

decrease.addEventListener("click", () => {
  counter--;
  count.textContent = counter;
});

reset.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
});

// Show / Hide Message
messageBtn.addEventListener("click", () => {
  if (message.textContent === "") {
    message.textContent = "Welcome to DecodeLabs Project 3!";
    messageBtn.textContent = "Hide Message";
  } else {
    message.textContent = "";
    messageBtn.textContent = "Show Message";
  }
});
