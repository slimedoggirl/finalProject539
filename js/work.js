//for hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    window.myFunction = function () {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  
    var hamburger = document.getElementById("hamburger-icon");
    hamburger.addEventListener('click', myFunction);
  });