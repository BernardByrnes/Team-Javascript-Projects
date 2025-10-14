const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const price = document.querySelector(".prc");

color2.addEventListener("click", () => {
  container.classList.add("change");
  price.textContent = "554,00";
});

color1.addEventListener("click", () => {
  container.classList.remove("change");
  price.textContent = "350,00";
});
