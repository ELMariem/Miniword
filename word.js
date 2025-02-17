document.querySelector(".color").addEventListener("input", function() {
    document.querySelector("h1").style.color = this.value;
  });
document.querySelector("select").addEventListener("change", function() {
    document.querySelector("h1").style.fontFamily = this.value;  
    });
const fontSizeInput = document.getElementById("fontSize");
const text = document.querySelector("h1");
fontSizeInput.addEventListener("input", function() {
    let newSize = fontSizeInput.value + "px";
    text.style.fontSize = newSize;
    });    