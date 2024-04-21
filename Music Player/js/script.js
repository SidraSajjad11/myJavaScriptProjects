let progressElement = document.querySelector('#progress');
let songElement = document.querySelector('#song');
let ctrlIconElement = document.querySelector('#ctrlIcon');
songElement.onloadedmetadata = function () {
  progressElement.max = songElement.duration;
  progressElement.value = songElement.currentTime;
}
function playPause() {
  if (ctrlIconElement.classList.contains('fa-pause')) {
    song.pause();
    ctrlIconElement.classList.remove('fa-pause');
    ctrlIconElement.classList.add('fa-play');
  } else {
    song.play();
    ctrlIconElement.classList.add('fa-pause');
    ctrlIconElement.classList.remove('fa-play');
    setInterval(() => {
      progressElement.value = songElement.currentTime;
    }, 500);
  }
}
progressElement.onchange = function(){
  song.play();
  songElement.currentTime = progressElement.value;
  ctrlIconElement.classList.add('fa-pause');
  ctrlIconElement.classList.remove('fa-play');
}