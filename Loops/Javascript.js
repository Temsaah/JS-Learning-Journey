const h1s = document.querySelectorAll("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  h1s.forEach((h1) => {
    h1.style.color = "blue";
  });
  btn.remove();
});
