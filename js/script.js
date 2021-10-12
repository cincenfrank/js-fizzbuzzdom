// cSpell: disable
const row = document.querySelector(".container>.row-cols-7");

for (let i = 1; i <= 100; i++) {
  // Creation of column div
  const col = document.createElement("div");
  col.classList.add("col");
  // Creation of base fizz-card div
  const fizzCard = document.createElement("div");
  fizzCard.classList.add("ratio", "ratio-1x1", "fizz-card");

  // Declaration of check variables
  const isFizz = i % 3 === 0;
  const isBuzz = i % 5 === 0;
  const isFizzBuzz = isFizz && isBuzz;
  // Instantiation of a blank text variable
  let cardTextContent = "";

  // check variables previously defined. Adds required classes
  // in case of fizzbuzz, fizz or buzz and always define
  // cardTextContent value
  if (isFizzBuzz) {
    fizzCard.classList.add("fizz-card--fizz-buzz");
    cardTextContent = "fizzbuzz";
  } else if (isFizz) {
    fizzCard.classList.add("fizz-card--fizz");
    cardTextContent = "fizz";
  } else if (isBuzz) {
    fizzCard.classList.add("fizz-card--buzz");
    cardTextContent = "buzz";
  } else {
    cardTextContent = i.toString();
  }
  // assign cardTextContent to fizzCard
  fizzCard.textContent = cardTextContent;
  // append fizzCard to col element
  col.appendChild(fizzCard);
  // append col element to row element
  row.append(col);
}
