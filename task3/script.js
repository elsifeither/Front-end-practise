const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");
const randomBtn = document.getElementById("randomColorBtn");

const colorHistoryDiv = document.getElementById("colorHistory");
const colorHistory = [];
const maxHistory = 5; 

const renderColorHistory = () => {
  colorHistoryDiv.innerHTML = "";
  colorHistory.forEach(color => {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.cursor = "pointer";
    box.style.border = "1px solid #000";
    box.addEventListener("click", () => {
      document.body.style.backgroundColor = color;
    });
    colorHistoryDiv.appendChild(box);
  });
};


randomColorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;

  colorHistory.push(randomColor);
  if (colorHistory.length > maxHistory) colorHistory.shift();
  renderColorHistory();
});

changeColorBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (color) {
    document.body.style.backgroundColor = color;
    colorInput.value = "";

    colorHistory.push(color);
    if (colorHistory.length > maxHistory) colorHistory.shift(); 
    renderColorHistory();
  } else {
    alert("Please enter a color!");
  }
});



