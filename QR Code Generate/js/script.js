let imgBoxElement = document.querySelector('#imgBox');
let qrImageElement = document.querySelector('#qrImage');
let qrTextElement = document.querySelector('#qrText'); 
function generateQr() {
  if (qrTextElement.value.length > 0) {
    qrImageElement.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrTextElement.value;
    imgBoxElement.classList.add('show-img');
  } else {
    qrTextElement.classList.add('error');
    setTimeout(() => {
      qrTextElement.classList.remove('error');
    }, 1000)
  }
}