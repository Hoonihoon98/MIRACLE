let currentIndex = 0;
const images = document.querySelectorAll('.slide');
const totalImages = images.length;
const slider = document.querySelector('.slider');

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateSlider();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100; // 이미지 이동 값
    slider.style.transform = `translateX(${offset}%)`;
}
