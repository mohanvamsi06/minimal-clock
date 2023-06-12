function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Format the time to add leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("time").innerHTML = timeString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
var fullscreenToggle = document.getElementById('fullscreenToggle');

fullscreenToggle.addEventListener('change', function() {
  if (document.fullscreenElement) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
});

function enterFullscreen() {
  var element = document.documentElement;  // Get the document element (root element)
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {  // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {  // Chrome, Safari, and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {  // Internet Explorer and Edge
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {  // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {  // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {  // Internet Explorer and Edge
    document.msExitFullscreen();
  }
}

var colorModeToggle = document.getElementById('color_mode');
var bodyElement = document.body;

colorModeToggle.addEventListener('change', function() {
  if (bodyElement.classList.contains('dark-preview')) {
    bodyElement.classList.remove('dark-preview');
    bodyElement.classList.add('white-preview');
  } else {
    bodyElement.classList.remove('white-preview');
    bodyElement.classList.add('dark-preview');
  }
});
