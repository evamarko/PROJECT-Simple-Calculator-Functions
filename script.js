const section = document.querySelector(".results");

const number1 = parseFloat(prompt("First number"));
const number2 = parseFloat(prompt("Second number"));

const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;

const paragraphToWebsite = (text, result, whereToAdd) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = text + result;
  whereToAdd.append(newParagraph);
};

if (Number.isFinite(number1) && Number.isFinite(number2)) {
  paragraphToWebsite("Addition: ", addition, section);
  paragraphToWebsite("Subtraction: ", subtraction, section);
  paragraphToWebsite("Multiplication: ", multiplication, section);
  paragraphToWebsite("Division: ", division, section);
} else {
  paragraphToWebsite("Incorrect inputs", "", section);
}
