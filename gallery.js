// 1. Grab our HTML elements
let gallerySeleciton = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// 2. Add event listeners
gallerySeleciton.addEventListener('click', event => {
    if(event.target.src !== undefined) {
        //turn modal on
        modalImg.src = event.target.src.replace("-sm", "-full");

        modal.showModal();
    }
});

closeButton.addEventListener("click", () => {
    modal.close();
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
})