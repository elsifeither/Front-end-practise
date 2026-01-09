const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");
const randomBtn = document.getElementById("randomColorBtn");


randomBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

changeColorBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (color) {
    document.body.style.backgroundColor = color;
    colorInput.value = "";
  } else {
    alert("Please enter a color!");
  }
});
