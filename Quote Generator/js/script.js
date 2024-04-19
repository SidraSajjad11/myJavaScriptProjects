const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const apiURL = 'https://api.quotable.io/random';
async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quoteElement.innerHTML = data.content;
  authorElement.innerHTML = data.author;
}
getQuote(apiURL);
function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quoteElement.innerHTML + "----- by" + authorElement.innerHTML, "Tweet Window", 'width = 600, height=300')
}