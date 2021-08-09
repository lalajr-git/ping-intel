// Slideshow
var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);

// Countdown Timer
// Set the date we are counting down to...
const launchTime = new Date("August 31, 2021 12:00:00").getTime();

// Update the countdown every one seconds
const countDown = setInterval(function () {
  const currentTime = new Date().getTime();
  const distance = launchTime - currentTime;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = ("0" + hours).slice(-2);
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  minutes = ("0" + minutes).slice(-2);
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  seconds = ("0" + seconds).slice(-2);

  document.getElementById("countdown-timer").innerHTML = days + " Days" + " | " + hours + " Hours" + " | " + minutes + " Minutes" + " | " + seconds + " Seconds";

  if (distance < 0) {
    clearInterval(countDown);
    document.getElementById("banner-live").innerHTML = "Thank you, for your love and support.";
    document.getElementById("countdown-timer").innerHTML = "We are finally live now!";
  }
}, 1000);

// Display current Date and Time
function currentDateTime() {
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let presentDate = today.getDate();
  let presentDay = today.getDay();
  let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let hrs = today.getHours();
  let am_pm = (hrs >= 12) ? "PM" : "AM";
  hrs = (hrs > 12) ? hrs - 12 : hrs;
  
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hrs = ("0" + hrs).slice(-2);
  mins = ("0" + mins).slice(-2);
  secs = ("0" + secs).slice(-2);

  document.getElementById("home-clock").innerHTML = daysArray[presentDay] + ", " + presentDate + "-" + monthArray[currentMonth] + "-" + currentYear + ", " + hrs + ":" + mins + ":" + secs + " " + am_pm;

  setTimeout(currentDateTime, 1000);
}