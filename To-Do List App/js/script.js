const inputBoxElement = document.querySelector('#input_box')
const inputNumberElement = document.querySelector('.input_number');
const listBoxElement = document.querySelector('.list-box');
const listContainerElement = document.querySelector('#list-container');
function addTask() {
  if(inputBoxElement.value === '' || inputNumberElement === ''){
    alert('You must enter some items and a price also');
    return;
   } 
  const li = document.createElement('li');
  li.innerHTML = `${inputBoxElement.value} - ${inputNumberElement.value}`;
  listContainerElement.appendChild(li);
  const spanElement = document.createElement('span');
  spanElement.innerHTML = '\u00d7';
  li.appendChild(spanElement);
  inputBoxElement.value = '';
  inputNumberElement.value = '';
  saveData();
}
function saveData() {
  localStorage.setItem('data', listContainerElement.innerHTML);
}
function showTask() {
  listContainerElement.innerHTML = localStorage.getItem('data');
}
listContainerElement.addEventListener('click', function(e) {
  console.log('listContainerElement', e.target);
  console.log('li', e.target.tagName);  
   if (e.target.tagName === 'LI') {
    console.log('Toggle Class Checked');
    e.target.classList.toggle('checked');
    saveData();
   } else if (e.target.tagName === 'SPAN') {
    console.log('Remove Parent Element')
    e.target.parentElement.remove();
    saveData();
  }
});
showTask();

