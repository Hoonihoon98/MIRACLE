let currentIndex = 0; // 현재 이미지 인덱스
const images = document.querySelectorAll('.slider-images img');
const totalImages = images.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showImage(index) {
    const offset = -index * 100; // 이미지의 width에 맞춰서 이동
    document.querySelector('.slider-images').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // 마지막 이미지 후 첫 번째 이미지로 돌아가기
    }
    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // 첫 번째 이미지 전 후 마지막 이미지로 돌아가기
    }
    showImage(currentIndex);
});
