function changecolor() {
  var str = "0123456789abcdef";
  var res = "#";
  for (let i = 0; i < 6; i++) {
    res += str[Math.floor(Math.random() * 16)];
  }
  return res;
}

var divr = document.querySelector("#div");
var button = document.getElementById("btn");
button.addEventListener("click", function () {
  divr.style.background = changecolor();
});
