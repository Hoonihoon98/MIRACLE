let currentIndex = 0; // 초기 이미지 번호
const totalImages = 365; // 총 이미지 개수
const slider = document.querySelector('.slider');
const totalImagesArray = Array.from({ length: totalImages }, (_, index) => `images/${index + 1}.jpg`);

// 이전 버튼 클릭 시 이미지 변경
document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex <= 0) {
        currentIndex = totalImages - 3;  // 마지막 3개 이미지로 돌아감
    } else {
        currentIndex--;
    }
    updateSlider();
});

// 다음 버튼 클릭 시 이미지 변경
document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex >= totalImages - 3) {
        currentIndex = 0;  // 첫 번째 이미지로 돌아감
    } else {
        currentIndex++;
    }
    updateSlider();
});

// 이미지 업데이트 함수
function updateSlider() {
    slider.innerHTML = ''; // 기존 이미지를 지우고
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        const img = document.createElement('img');
        img.src = totalImagesArray[i];
        slider.appendChild(img);
    }
    // 슬라이드를 이동시키는 효과
    slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

// 최초 이미지 로드
updateSlider();
