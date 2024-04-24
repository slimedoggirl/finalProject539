// javascript for collapsible buttons from w3schools

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    // Toggle the text of the collapsible button
    if (this.textContent === "See Games") {
      this.textContent = "Collapse";
    } else {
      this.textContent = "See Games";
    }

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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