let wrapper = document.querySelector(".container");
let qrInput = document.querySelector(".form input");
let generateBtn = document.querySelector("button");
let qrImg = document.querySelector(".qrImg img");

function el() {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

  wrapper.classList.add("active");
}
