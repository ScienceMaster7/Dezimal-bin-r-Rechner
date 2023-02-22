function convertDecimalToBinary(num) {
    var binary = "";
    var isNegative = false;
    if (num < 0) {
      isNegative = true;
      num = Math.abs(num);
    }
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }
    if (isNegative) {
      // Umwandlung von negativem Dezimalwert in negative Binärzahl
      binary = convertTwosComplement(binary);
    }
    return binary;
  }
  
  function convertBinaryToDecimal(binary) {
    var decimal = 0;
    var isNegative = false;
    if (binary.charAt(0) === "-") {
      isNegative = true;
      binary = binary.substring(1);
    }
    for (var i = binary.length - 1; i >= 0; i--) {
      if (binary.charAt(i) === "1") {
        decimal += Math.pow(2, binary.length - 1 - i);
      }
    }
    if (isNegative) {
      // Umwandlung von negativer Binärzahl in negativen Dezimalwert
      decimal = -Math.abs(decimal);
    }
    return decimal;
  }
  
  function convertTwosComplement(binary) {
    // Umwandlung in Zweierkomplement
    var complement = "";
    for (var i = 0; i < binary.length; i++) {
      if (binary.charAt(i) === "0") {
        complement += "1";
      } else {
        complement += "0";
      }
    }
    var decimal = convertBinaryToDecimal(complement);
    decimal += 1;
    return convertDecimalToBinary(decimal);
  }
  
  function onConvert() {
    var binaryInput = document.getElementById("binary");
    var decimalInput = document.getElementById("decimal");
    if (binaryInput.value !== "") {
      var binary = binaryInput.value;
      if (binary.charAt(0) === "-") {
        var decimal = convertBinaryToDecimal(binary);
        decimalInput.value = decimal.toString();
      } else {
        var decimal = parseInt(binary, 2);
        decimalInput.value = decimal.toString();
      }
    } else if (decimalInput.value !== "") {
      var decimal = parseFloat(decimalInput.value);
      var binary = convertDecimalToBinary(decimal);
      binaryInput.value = binary.toString();
    }
  }
  
  var convertButton = document.getElementById("convert");
  convertButton.addEventListener("click", onConvert);