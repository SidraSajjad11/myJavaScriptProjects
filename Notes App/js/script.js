const notesContainerElement = document.querySelector('.notes-container');
const creatBtnElement = document.querySelector('.btn');
let notesElement = document.querySelectorAll('input-box');
function showNotes() {
  notesContainerElement.innerHTML = localStorage.getItem('notes');
}
showNotes();
function updateStorage() {
  localStorage.setItem('notes', notesContainerElement.innerHTML);
}
creatBtnElement.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img'); 
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable','true'); 
  img.src = 'images/delete.png'
  notesContainerElement.appendChild(inputBox).appendChild(img); 
});
notesContainerElement.addEventListener('click', function(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notesElement = document.querySelectorAll('.input-box');
    notesElement.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
})