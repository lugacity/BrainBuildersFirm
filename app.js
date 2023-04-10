// 'use strict';

// Type script
const typeScript = document.querySelector('.auto-type');
var Typed = new Typed(".auto-type",{
    strings: ["Builders IT Firm", 
              ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});






// // SKills style
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
















//   End SKills style

// Sticky
// let logoDetails = document.getElementById("logo-details");
// let logoDetail = document.getElementById("logo-details-3");

// let sticky = logoDetails.offsetTop;


// window.addEventListener("scroll", myFunction)

// function myFunction() {
  
//   if (window.pageYOffset >= sticky) {
//     logoDetails.classList.add("top-nav")
//   } else {
//     logoDetails.classList.remove("top-nav");
//   }
//     // console.log(window.pageYOffset)

//     if (window.pageYOffset >= 30) {
//         image.style.display = "block"  
//         document.getElementById("logo-details-3").style.display = "none"
//       } else {
//          image.style.display = "none"  
//          document.getElementById("logo-details-3").style.display = "block"
//       }
    
//     }