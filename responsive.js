// 1. Select menu from DOM

let menuButton = document.querySelector('.menu-btn');

// 2. Add event listener

menuButton.addEventListener('click', (e) => {
    let nav = document.querySelector('nav');

    //example of ternary operator:
    //                    question piece      condition a : condition b
    nav.style.display = nav.style.display === '' ? 'flex' : '';

    
    menuButton.classList.toggle('change');
});


// 3. toggle display links





// 4. Toggle X animation for menu button




