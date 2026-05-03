let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let subtitle = document.querySelector('.title-p');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo-white.webp';
        subtitle.style.color = '#AFC1CC';

    } else if (current == 'light') {
        document.body.classList.remove('dark');
        logo.src = 'image1.webp'
        subtitle.style.color = '#0047BA';
    }
}

