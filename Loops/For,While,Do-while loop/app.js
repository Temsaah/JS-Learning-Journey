let pCount = prompt("How many paragraphs to create?", 0);

for (let i = 0; i < pCount; i++) {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Paragraph No.${i + 1}`;

  document.body.appendChild(paragraph);
}

// let i = 1;

// while (i < pCount) {
//   let paragraph = document.createElement("p");
//   paragraph.textContent = `Paragraph No.${i}`;

//   document.body.appendChild(paragraph);
//   i++;
// }

// let i = 1;

// do {
//   let paragraph = document.createElement("p");
//   paragraph.textContent = `Paragraph No.${i}`;

//   document.body.appendChild(paragraph);
//   i++;
// } while (i <= pCount);
