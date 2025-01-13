let currentIndex = 1;  // 초기 이미지 번호
const totalImages = 365; // 총 이미지 개수

// 이전 버튼 클릭 시 이미지 변경
document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex <= 1) {
        currentIndex = totalImages;  // 마지막 이미지로 돌아감
    } else {
        currentIndex--;
    }
    updateImage();
});

// 다음 버튼 클릭 시 이미지 변경
document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex >= totalImages) {
        currentIndex = 1;  // 첫 번째 이미지로 돌아감
    } else {
        currentIndex++;
    }
    updateImage();
});

// 이미지 업데이트 함수
function updateImage() {
    const slideImage = document.getElementById('slide-image');
    slideImage.src = `images/${currentIndex}.jpg`; // 이미지 변경
}
