const buttonRight = document.querySelector('.slider-arrow-right'),
    buttonLeft = document.querySelector('.slider-arrow-left'),
    inspirationSlider = document.querySelector('.inspiration-slider'),
    inspirationImages = document.querySelectorAll('.inspiration-img');

for (let i = 0; i < inspirationImages.length; i++) {
    if (i % 2 === 0) {
        inspirationImages[i].addEventListener('click', (e) => {
            e.preventDefault();
            window.location = './category-all.html';
        });
    } else {
        inspirationImages[i].addEventListener('click', (e) => {
            e.preventDefault();
            window.location = './product-details.html';
        });
    }
}

function multiItemSlider(selector) {
    let mainElement = document.querySelector(selector);
    const sliderWrapper = mainElement.querySelector('.slider-wrapper'),
        sliderItems = mainElement.querySelectorAll('.slider-item'),
        sliderControls = mainElement.querySelectorAll('.slider-control'),
        wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
        itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
    let positionLeftItem = 0,
        transform = 0,
        step = itemWidth / wrapperWidth * 100,
        items = [];

    sliderItems.forEach(function (item, index) {
        items.push({ item: item, position: index, transform: 0 });
    });

    const position = {
        getMin: 0,
        getMax: items.length - 1
    }

    const transformItem = function (direction) {
        if (direction === 'right') {
            if (positionLeftItem + wrapperWidth / itemWidth - 1 >= position.getMax) {
                return;
            } else {
                positionLeftItem++;
                transform -= step;
            }
        }

        if (direction === 'left') {
            if (positionLeftItem <= position.getMin) {
                return;
            } else {
                positionLeftItem--;
                transform += step;
            }
        }

        sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    }

    const controlClick = function (e) {
        if (e.target.classList.contains('slider-control')) {
            e.preventDefault();
            const direction = e.target.classList.contains('slider-control-right') ? 'right' : 'left';
            transformItem(direction);
        }
    };

    const setUpListeners = function () {
        sliderControls.forEach(function (item) {
            item.addEventListener('click', controlClick);
        });
    }

    setUpListeners();

    return {
        right: function () {
            transformItem('right');
        },

        left: function () {
            transformItem('left');
        }
    }
}

multiItemSlider('.slider');