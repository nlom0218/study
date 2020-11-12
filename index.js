const $ul = document.getElementById("ul");

const changeColor = (e) => {
  [...$ul.children].forEach((item) => {
    if (e.target.innerText === item.innerText) {
      e.target.style.color = "원하는 색깔";
    } else {
      e.target.style.color = "#FFF";
    }
  });
};

$ul.addEventListener("click", changeColor);
