const categoryProductImages = document.querySelectorAll('.category-product-img');

categoryProductImages.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        window.location = './product-details.html';
    });
});