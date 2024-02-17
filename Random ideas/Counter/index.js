let count = document.querySelector(".count");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let autoCountBtn = document.querySelector(".auto-count");

let countNumber = 0;
let limit = prompt("enter counter max limit", 0);

while (limit == null) limit = prompt("enter counter max limit", 0);

incrementBtn.addEventListener("click", () => {
  if (countNumber < limit) count.textContent = ++countNumber;
});

decrementBtn.addEventListener("click", () => {
  if (countNumber > 0) count.textContent = --countNumber;
});

autoCountBtn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    if (countNumber < limit) {
      count.textContent = ++countNumber;
    } else {
      clearInterval(intervalId);
    }
  }, 50);
});
