const addToCardBtn = document.querySelector('.add-to-card-btn'),
    productImg = document.querySelector('.product-img'),
    miniImages = document.querySelectorAll('.product-mini-img-wrap img'),
    basketAmount = document.querySelector('.basket-amount');

addToCardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newAmount = +basketAmount.textContent + 1;
    
    basketAmount.textContent = newAmount;
});

miniImages.forEach((img) => {
    img.addEventListener('click', () => {
        let mainImgSrc = productImg.src,
            miniImgSrc = img.src;

        productImg.src = miniImgSrc;
        img.src = mainImgSrc;
    });
});