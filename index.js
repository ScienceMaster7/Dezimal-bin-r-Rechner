const input = document.getElementById("input");
const conversionType = document.getElementById("conversionType");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

convertButton.addEventListener("click", function () {
  const inputValue = input.value;
  const selectedOption = conversionType.value;

  if (selectedOption === "binaryToDecimal") {
    result.textContent = parseInt(inputValue, 2);
  } else {
    result.textContent = Number(inputValue).toString(2);
  }
});
