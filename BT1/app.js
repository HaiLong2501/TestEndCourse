function checkSnt(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function check() {
  let a = Number(document.querySelector("#input1").value);
  let b = Number(document.querySelector("#input2").value);
  let p = document.querySelector("#result");
  let snt = "";
  let sum = 0;
  let result = "";
  for (let i = a; i <= b; i++) {
    if (checkSnt(i)) {
      snt += i + `,`;
      sum += i;
    }
  }
  result += `Các số nguyên tố trong khoảng từ ${a} đến ${b} là: ${snt} <br  />
             Tổng các số nguyên tố trong khoảng là: ${sum}`;
  p.innerHTML = result;
}
