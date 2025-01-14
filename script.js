document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const slideIndicator = document.querySelector('.slide-indicator');
    const totalSlides = slides.length;
    let currentIndex = 0;

    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
        slideIndicator.textContent = `${currentIndex + 1}/${totalSlides}`;
    };

    document.querySelector('.arrow-left').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlider();
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });

    // 슬라이더 초기화
    updateSlider();
});
