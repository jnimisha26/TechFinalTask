
//like 
const heart = document.getElementById('like');
const liked = document.getElementById('red');

heart.addEventListener('click', () => {
    if (heart.style.backgroundColor === '') {
        heart.style.backgroundColor = ' rgb(255, 0, 0)';
        liked.style.filter = 'invert(100%)';
    }
    else {
        heart.style.backgroundColor = '';
        liked.style.filter = 'invert(0)';
    }

});

//comment section
const commentd = document.getElementById('com');
const cdisplay = document.getElementById('cs');

commentd.addEventListener('click', () => {
    if (cdisplay.style.display === 'none' || cdisplay.style.display === '') {
        cdisplay.style.display = 'block';
    }
    else {
        cdisplay.style.display = 'none';
    }
});

//drop down menu
var settingsMenu = document.querySelector(".settings-menu");
var dotsmenu = document.getElementById("dots-menu");

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}