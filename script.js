document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelector('.slider-images');
    const slides = document.querySelectorAll('.slider-images img');
    const slideIndicator = document.querySelector('.slide-indicator');
    const totalSlides = slides.length;
    let currentIndex = 0;

    const updateSlider = () => {
        sliderImages.style.transform = `translateX(-${currentIndex * 800}px)`;
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
