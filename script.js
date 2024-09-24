var togglebutton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// Toggle Skills section visibility
togglebutton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
