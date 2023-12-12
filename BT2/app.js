function numberOneTriangle() {
  let input = Number(document.querySelector("#input").value);
  if (1 <= input && input <= 10) {
    for (let i = 1; i <= input; i++) {
      for (let j = 1; j <= i; j++) {
        document.write("*");
      }
      document.writeln("<br  />");
    }
  } else {
    alert("Nhập từ 1 đến 10");
  }
}
