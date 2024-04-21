let toastBoxElement = document.querySelector('#toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again.';
function showToast(msg) {
  let toastElement = document.createElement('div');
  toastElement.classList.add('toast');
  toastElement.innerHTML = msg;
  toastBoxElement.appendChild(toastElement);
  if (msg.includes('error')) {
    toastElement.classList.add('error');
  }
  if (msg.includes('Invalid')) {
    toastElement.classList.add('invalid');
  }
  setTimeout(() => {
    toastElement.remove();
  }, 6000);
}