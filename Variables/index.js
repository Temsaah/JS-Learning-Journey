let btn = document.querySelector(".btn");
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var currentColorIndex = 0;

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});
