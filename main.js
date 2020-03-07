'use strict';
{
    const hazimete = document.getElementById('hazimete');

    hazimete.addEventListener('mouseover', () => {
        document.getElementById('dropdown-menu').style.display = 'block';
    });

    hazimete.addEventListener('mouseout', () => {
        document.getElementById('dropdown-menu').style.display = 'none'
    });

}