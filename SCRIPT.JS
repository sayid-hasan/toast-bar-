let toastBox = document.querySelector(".toast__box");
let submit = document.querySelector(".submit");
let error = document.querySelector(".Error");
let Invalid = document.querySelector(".Invalid");
submit.addEventListener("click", () => {
  showToast(successMsg);
});
error.addEventListener("click", () => {
  showToast(errorMsg);
});
Invalid.addEventListener("click", () => {
  showToast(invalidMsg);
});

let successMsg =
  '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check again';

function showToast(msg) {
  let toast = document.createElement("DIV");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("Invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 5500);
}
