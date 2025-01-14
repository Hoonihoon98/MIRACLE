document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.getElementById('slider-images');
    const slideIndicator = document.getElementById('slide-indicator');
    const totalSlides = 365;
    let currentIndex = 0;

    // 이미지 동적 추가
    for (let i = 1; i <= totalSlides; i++) {
        const img = document.createElement('img');
        img.src = `images/${i}.jpg`;
        img.alt = `Slide ${i}`;
        img.className = 'slide';
        sliderImages.appendChild(img);
    }

    const slides = document.querySelectorAll('.slide');

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
