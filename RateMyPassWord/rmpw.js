// Citation: Claude.com//

const passwordInput = document.getElementById("password-input");
const toggleButton = document.getElementById("toggle-visibility");
const meterWrapper = document.getElementById("meter-wrapper");
const strengthMeter = document.getElementById("strength-meter");
const feedbackList = document.getElementById("feedback-list");

function togglePasswordVisibility() {
  const isPassword = passwordInput.getAttribute("type") === "password";
  if (isPassword) {
    passwordInput.setAttribute("type", "text");
    toggleButton.setAttribute("aria-label", "Hide password");
  } else {
    passwordInput.setAttribute("type", "password");
    toggleButton.setAttribute("aria-label", "Show password");
  }
}

const feedbackTips = [
  {
    check: (pwd) => pwd.length < 8,
    message: "Add at least 8 characters for your password!",
  },
  {
    check: (pwd) => !/[A-Z]/.test(pwd),
    message: "Add a uppercase letter to your password!",
  },
  {
    check: (pwd) => !/[a-z]/.test(pwd),
    message: "Add a lowercase letter to your passsword!",
  },
  { check: (pwd) => !/[0-9]/.test(pwd), message: "Add a number!" },
  {
    check: (pwd) => !/[^A-Za-z0-9]/.test(pwd),
    message: "Add a special character!",
  },
];

const strengthLabels = ["Bad", "OK", "Developing", "Good", "Strong"];
const strengthClasses = ["bad", "ok", "developing", "good", "strong"];

function updateStrengthMeter(password) {
  if (password.length === 0) {
    meterWrapper.classList.remove("open");
    feedbackList.innerHTML = "";
    return;
  }

  const result = zxcvbn(password);
  const score = result.score;

  strengthMeter.textContent = strengthLabels[score];
  strengthMeter.className = strengthClasses[score];

  meterWrapper.classList.add("open");

  const activeFeedback = feedbackTips
    .filter((tip) => tip.check(password))
    .map((tip) => tip.message);

  feedbackList.innerHTML = "";
  activeFeedback.forEach((message) => {
    const li = document.createElement("li");
    li.textContent = message;
    feedbackList.appendChild(li);
  });
}

toggleButton.addEventListener("click", togglePasswordVisibility);
passwordInput.addEventListener("input", (event) => {
  updateStrengthMeter(event.target.value);
});
