// Скрипт для поиска

let searchButton = document.querySelector('.header__buttons-search img');
let searchInput = document.querySelector('.header__buttons-search input[type="text"]');
let searchParent = searchInput.parentNode;
let hiddenClass= 'header__buttons-search_hidden';

function search(value) {
    if (value) {
        window.open(`https://www.google.com/search?q=${value}`, '_blank');
        searchInput.value = '';
        searchInput.blur();
        searchParent.classList.add(hiddenClass);
    }
}

searchButton.addEventListener('click', () => {
    if ([].includes.call(searchParent.classList, hiddenClass)) { // заимствуем у массива метод includes для classList
        searchParent.classList.remove(hiddenClass);
        searchButton.blur();
        searchInput.focus();
        searchInput.classList.add('focused');
    }
    else search(searchInput.value);
});

searchInput.addEventListener('blur', () => {
    if (![].includes.call(searchParent.classList, hiddenClass) && !searchInput.value) {
        searchParent.classList.add(hiddenClass);
        searchInput.classList.remove('focused');
    }
});
searchInput.addEventListener('keyup', event => {
    if (event.code == 'Enter') {
        search(searchInput.value);
    }
});




// Скрипт для мобильного меню

let mobileButton = document.querySelector('.header__mobile-button');

mobileButton.addEventListener('click', () => {
    let header = document.querySelector('.header');
    
    if (![].includes.call(header.classList, 'header_hidden')) {
        header.classList.add('header_hidden');
    } 
    else header.classList.remove('header_hidden');
});