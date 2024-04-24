// javascript for collapsible buttons from w3schools

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Hamburger menu functionality
    var hamburger = document.getElementById("hamburger-icon");
    var myLinks = document.getElementById("myLinks");

    if (hamburger) {
        console.log('Hamburger icon found');
        hamburger.addEventListener('click', function () {
            console.log('Hamburger icon clicked');
            if (myLinks.style.display === "block") {
                myLinks.style.display = "none";
                console.log('Hiding navigation links');
            } else {
                myLinks.style.display = "block";
                console.log('Showing navigation links');
            }
        });
    } else {
        console.log('Hamburger icon not found');
    }

    //Mic animation
    var archivistListItem = document.getElementById('archivist');
    var micImage = document.getElementById('mic');

    if (archivistListItem && micImage) {
        console.log('Archivist and mic');
        archivistListItem.addEventListener('click', function () {
            console.log('Archivist clicked');
            micImage.classList.toggle('pop-out');
        });
    } else {
        console.log('Archivist or mic not found');
    }

    // Cat animation
    var artistListItem = document.getElementById('artist');
    var catImage = document.getElementById('cat');

    if (artistListItem && catImage) {
        console.log('Artist and cat');
        artistListItem.addEventListener('click', function () {
            console.log('Artist clicked');
            catImage.classList.toggle('pop-out');
        });
    } else {
        console.log('Artist or cat not found');
    }

    // line animation
    var gamerListItem = document.getElementById('gamer');
    var linesImage = document.getElementById('lines');

    if (gamerListItem && linesImage) {
        console.log('Gamer and lines found');
        gamerListItem.addEventListener('click', function () {
            console.log('Gamer clicked');
            linesImage.classList.toggle('pop-out');
        });
    } else {
        console.log('Gamer or lines not found');
    }

    // student animation
    var studentListItem = document.getElementById('student');
    var lightImage = document.getElementById('light');

    if (studentListItem && lightImage) {
        console.log('student and light found');
        studentListItem.addEventListener('click', function () {
            console.log('student clicked');
            lightImage.classList.toggle('pop-out');
        });
    } else {
        console.log('student or light not found');
    }
});

