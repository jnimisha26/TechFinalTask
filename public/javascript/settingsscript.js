var settingsMenu = document.querySelector(".settings-menu");
var dotsmenu = document.getElementById("dots-menu");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

// function dotsMenuToggle(){
//     dotsmenu.classList.toggle("dots-menu-height");
// }

//update dropdown
const uppost = document.getElementById('update-1');
const  show= document.getElementById('overlayed-1');

uppost.addEventListener('click', () => {
    if (show.style.display === 'none' || show.style.display === '') {
        show.style.display = 'block';
    }
    else {
        show.style.display = 'none';
    }
});

//edit dropdown
const editicon = document.getElementById('edit-1');
const display = document.getElementById('show-1');

editicon.addEventListener('click', () => {
    if (display.style.display === 'none' || display.style.display === '') {
        display.style.display = 'flex';
    }
    else {
        display.style.display = 'none';
    }
});

//update dropdown
const uppost2 = document.getElementById('update-2');
const  show2= document.getElementById('overlayed-2');

uppost2.addEventListener('click', () => {
    if (show2.style.display === 'none' || show2.style.display === '') {
        show2.style.display = 'block';
    }
    else {
        show2.style.display = 'none';
    }
});

//edit dropdown
const editicon2 = document.getElementById('edit-2');
const display2 = document.getElementById('show-2');

editicon2.addEventListener('click', () => {
    if (display2.style.display === 'none' || display2.style.display === '') {
        display2.style.display = 'flex';
    }
    else {
        display2.style.display = 'none';
    }
});