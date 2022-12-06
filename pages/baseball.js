const randomNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
  let answer = "";
  while (answer.length !== 4) {
    let random = String(randomNumberInRange(1, 9));
    if (answer.indexOf(random) == -1) {
      answer += random;
    }
}

const $answer = document.querySelector(".answer");
$answer.textContent = answer;

const $opertunity = document.querySelector(".opertunity");
let opertunity = parseInt($opertunity.textContent);

let inputValue = "";
const $input = document.querySelector("input");
const handleInput = (e) => {
  inputValue = e.target.value;
};
$input.addEventListener("input", handleInput);

// 입력체크 함수
const inputCheck = (input) => {
  if (input.length !== 4 || !$input.value) {
    return false;
  }
  
  let inputCheck = "";
  
  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) == i) inputCheck += input[i];
  }
  
  if (input === inputCheck) return true;
  else return false;
};

const $isProgress = document.querySelector(".isProgress");
const $strikeCount = document.querySelector(".strikeCount");
const $ballCount = document.querySelector(".ballCount");

const $btn = document.querySelector("button");
const handleButtonClick = () => {
  let strike = 0;
  let ball = 0;
  
  if (!inputCheck(inputValue)) {
    alert("중복되지 않는 4자리의 숫자를 입력해주세요!");
    $input.value = "";
    return;
  }
  if (inputValue === answer) {
    $isProgress.textContent = "홈런 입니다!";
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (answer.indexOf(inputValue[i]) !== -1 && inputValue[i] == answer[i]) {
      strike += 1;
    } else if (answer.indexOf(inputValue[i]) !== -1) {
      ball += 1;
    }
  }
  
  $strikeCount.textContent = strike;
  $ballCount.textContent = ball;

  if (strike === 0 && ball === 0) $isProgress.textContent = "아웃";
  else $isProgress.textContent = "게임 진행 중";
  
  $input.value = "";
  $input.focus();
  $opertunity.textContent = opertunity -= 1;

  if (opertunity < 0) {
    $opertunity.textContent = "아웃";
    alert("아웃");
    return;
  }
};

$btn.addEventListener("click", handleButtonClick);
