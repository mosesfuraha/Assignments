const characterRange = document.getElementById("inputSlider");
const characterNumber = document.getElementById("sliderValue");
const passwordGenerator = document.getElementById("passwordGenerator");
const passwordDisplay = document.getElementById("passBox");
const copyIcon = document.getElementById("copyIcon");
const genBtn = document.getElementById("genBtn");
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64).concat(
    arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126))
  )
);

const lowerCaseElement = document.getElementById("lowercase");
const upperCaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");

characterNumber.addEventListener("input", syncCharacterAmount);
characterRange.addEventListener("input", syncCharacterAmount);

passwordGenerator.addEventListener("submit", (e) => {
  e.preventDefault();
  const chrAmount = characterNumber.value;
  const lowerCase = lowerCaseElement.checked;
  const upperCase = upperCaseElement.checked;
  const includeNumbers = numbersElement.checked;
  const includeSymbols = symbolsElement.checked;
  const password = generatePassword(
    chrAmount,
    lowerCase,
    upperCase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.value = password;
  passwordDisplay.style.color = "lightgray"; // Set password color to light gray
  passwordDisplay.style.fontSize = "24px"; // Increase font size of the password

  genBtn.innerHTML =
    'Generate Password <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>';
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordDisplay.value).then(() => {
    passwordDisplay.value = "Copied!";
    passwordDisplay.style.color = "var(--button-color)"; // Set copied text color to button color
    passwordDisplay.style.fontSize = "24px"; // Increase font size of the copied text
    setTimeout(() => {
      const chrAmount = characterNumber.value;
      const lowerCase = lowerCaseElement.checked;
      const upperCase = upperCaseElement.checked;
      const includeNumbers = numbersElement.checked;
      const includeSymbols = symbolsElement.checked;
      const password = generatePassword(
        chrAmount,
        lowerCase,
        upperCase,
        includeNumbers,
        includeSymbols
      );
      passwordDisplay.value = password;
      passwordDisplay.style.color = "lightgray"; // Reset password color to light gray
      passwordDisplay.style.fontSize = "24px"; // Maintain increased font size for password
    }, 1000);
  });
});

function generatePassword(
  chrAmount,
  lowerCase,
  upperCase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = [];
  if (lowerCase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
  if (upperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < chrAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  const password = passwordCharacters.join("");

  // Check password strength
  checkPasswordStrength(password);

  return password;
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterNumber.value = value;
  characterRange.value = value;
}

//checking the stregnth of the password

function checkPasswordStrength(password) {
  let strength = 0;

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#\$%\^\&*\)\(+=._-]+/.test(password);

  if (hasLowerCase) strength++;
  if (hasUpperCase) strength++;
  if (hasNumbers) strength++;
  if (hasSymbols) strength++;
  if (password.length >= 8) strength++;

  updateStrengthBars(strength);
}

function updateStrengthBars(strength) {
  const strengthBars = document.querySelectorAll(".strength-bar");
  const strengthText = document.querySelector(".mdm-txt");

  strengthBars.forEach((bar, index) => {
    bar.classList.remove("weak", "medium", "strong", "filled");
    if (index < strength) {
      bar.classList.add("filled");
      if (strength <= 2) {
        bar.classList.add("weak");
      } else if (strength === 3) {
        bar.classList.add("medium");
      } else {
        bar.classList.add("strong");
      }
    }
  });

  switch (strength) {
    case 0:
    case 1:
      strengthText.textContent = "TOO WEAK !"
      break;
    case 2:
      strengthText.textContent = "WEAK";
      break;
    case 3:
      strengthText.textContent = "MEDIUM";
      break;
    case 4:
    case 5:
      strengthText.textContent = "STRONG";
      break;
    default:
      strengthText.textContent = "";
  }
}

window.onload = function () {
  lowerCaseElement.checked = false;
  upperCaseElement.checked = false;
  numbersElement.checked = false;
  symbolsElement.checked = false;
};
