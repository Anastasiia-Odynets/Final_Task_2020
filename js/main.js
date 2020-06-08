const squaresImages = document.querySelectorAll('.squares-img-wrap'),
    basketBtn = document.querySelector('.basket'),
    searchIcon = document.querySelector('.search-icon'),
    searchInput = document.querySelector('.search-input');

squaresImages.forEach((img) => {
    if (img.querySelector('.squares-img-text')) {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            window.location = './product-details.html';
        });
    } else {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            window.location = './category-all.html';
        });
    }
});

searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (searchInput.classList.contains('search-input-active')) {
        if (searchInput.value.length !== 0) {
            console.log(searchInput.value);
            window.location = './category-all.html';
        } else {
            searchInput.classList.remove('search-input-active');
            searchIcon.classList.remove('search-icon-active');
        }
    } else {
        searchInput.classList.add('search-input-active');
        searchIcon.classList.add('search-icon-active');
        searchInput.focus();
    }
})

searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && searchInput.value.length !== 0) {
        e.preventDefault();
        console.log(searchInput.value);
        window.location = './category-all.html';
    } else if (e.keyCode === 27) {
        searchInput.classList.remove('search-input-active');
        searchIcon.classList.remove('search-icon-active');
    }
});

basketBtn.addEventListener('click', () => {
    window.location = './shopping-bag.html';
});