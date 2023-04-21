const video = document.getElementById("myVideo");
const image = document.getElementById("myImage");
const playButton = document.getElementById('playButton');
const thumbsButton = document.getElementById('thumbsButton');

video.addEventListener('ended', function() {
  image.style.display = "block";
  video.style.display = "none";
});
playButton.style.display = 'none';
thumbsButton.style.display = 'none';
video.addEventListener('ended', function() {
  playButton.style.display = 'block';
  thumbsButton.style.display = 'block';
  playButton.classList.add('button')
});




