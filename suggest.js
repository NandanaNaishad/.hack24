document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.parentElement;
        const carouselItems = carousel.querySelector('.carousel-items');
        const itemWidth = carousel.querySelector('.detail-box').offsetWidth;
        const currentTransform = getComputedStyle(carouselItems).transform;
        let newTransformValue = 0;

        if (button.classList.contains('next')) {
            newTransformValue = currentTransform === 'none' ? -itemWidth : parseInt(currentTransform.split(',')[4]) - itemWidth;
        } else {
            newTransformValue = currentTransform === 'none' ? 0 : parseInt(currentTransform.split(',')[4]) + itemWidth;
        }

        carouselItems.style.transform = `translateX(${newTransformValue}px)`;
    });
});
