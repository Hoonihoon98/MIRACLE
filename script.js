// 이미지 파일 배열 생성
const images = [];
const totalImages = 365; // 총 이미지 수

// 1번부터 365번까지의 이미지 파일을 배열에 추가
for (let i = 1; i <= totalImages; i++) {
    images.push(`images/miracle (${i}).jpg`);  // 이미지 파일 경로 패턴 (괄호와 공백 포함)
}

let currentIndex = 0; // 현재 보여주는 이미지의 인덱스

// 슬라이더 요소
const slider = document.querySelector('.slider');

// 이미지 슬라이더 동적으로 추가
function updateSlider() {
    // 슬라이더 내용 초기화
    slider.innerHTML = '';

    // 현재 인덱스에서 5개의 이미지를 보여줄 예시
    for (let i = currentIndex; i < currentIndex + 5 && i < images.length; i++) {
        const img = document.createElement('img');
        img.src = images[i];
        slider.appendChild(img);
    }
}

// 좌측 화살표 클릭 시 동작
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSlider();
});

// 우측 화살표 클릭 시 동작
document.getElementById('next').addEventListener('click', () => {
    if (currentIndex + 5 < images.length) {
        currentIndex++;
    }
    updateSlider();
});

// 첫 번째 슬라이드를 초기화
updateSlider();
