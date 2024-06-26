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
  passwordDisplay.style.color = "lightgray";

  genBtn.innerHTML =
    'Generate Password <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>';
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordDisplay.value).then(() => {
    passwordDisplay.value = "Copied!";
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
      passwordDisplay.style.color = "lightgray";
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
  return passwordCharacters.join("");
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
