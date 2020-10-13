const $counter = document.getElementById("counter-x");
// error가 나타나는 이유를 디버깅을 통해 알 수 있다.
const $increase = document.getElementById("increase");
const $decrease = document.getElementById("decrease");

let num = 0;
const render = function () {
  $counter.innerHTML = num;
};

$increase.onclick = () => {
  num++;
  console.log("increase 버튼 클릭", num);
  render();
};

$decrease.onclick = () => {
  num--;
  console.log("decrease 버튼 클릭", num);
  render();
};
