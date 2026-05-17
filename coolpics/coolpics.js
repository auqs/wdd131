const btn = document.querySelector('.menu');
const menu = document.querySelector('nav ul');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const closeButton = document.querySelector('.close-viewer');
const modalImage = modal.querySelector('img');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');

}

gallery.addEventListener('click', openModal)

function openModal(e) {
    console.log(e);
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('sm','full')
    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();

}

closeButton.addEventListener('click', ()=> {
    modal.close();
});

modal.addEventListener('click', (event)=> {
    if (event.target === modal) {
        modal.close();
    }
});