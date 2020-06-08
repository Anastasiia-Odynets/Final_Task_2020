const orderBtn = document.querySelector('.order-btn'),
    continueBtn = document.querySelector('.shopping-bag-continue-btn'),
    deleteButtons = document.querySelectorAll('.shopping-bag-product-delete'),
    products = document.querySelectorAll('.shopping-bag-table-tr'),
    basketAmount = document.querySelector('.basket-amount');

orderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = './thank-you.html';
});

continueBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = './home.html';
});

function countProduct() {
    let productAmount = 0;
    const tables = document.querySelectorAll('.shopping-bag-table');

    tables.forEach((table) => {
        if (getComputedStyle(table).display === 'table') {
            const productsQty = table.querySelectorAll('.product-qty');

            productsQty.forEach((productQty) => {
                let prevValue = +productQty.value;

                productAmount += prevValue;
                basketAmount.textContent = productAmount;
                productQty.addEventListener('change', (e) => {
                    e.preventDefault();
                    productAmount -= prevValue;
                    prevValue = +productQty.value;
                    productAmount += prevValue;
                    basketAmount.textContent = productAmount;
                });
            });
        }
    });
}

deleteButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const parent = e.currentTarget.parentElement,
            amount = parent.querySelector('.product-qty').value,
            currentAmount = +basketAmount.textContent;

        basketAmount.textContent = currentAmount - amount;
        parent.remove();
    });
});

countProduct();