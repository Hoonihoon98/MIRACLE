// 이미지 파일 배열 생성
const images = [];
const totalImages = 365; // 총 이미지 수

// 이미지 파일 경로 설정
for (let i = 1; i <= totalImages; i++) {
    images.push(`images/miracle (${i}).jpg`);
}

// 슬라이더 요소들
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const sliderBarTrack = document.getElementById("slider-bar-track");

// 현재 이미지 인덱스
let currentIndex = 0;

// 이미지 로드 함수
function loadImages() {
    // 기존 이미지를 초기화
    slider.innerHTML = '';

    // 현재 이미지 3개만 보여주기
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (i < totalImages) {
            const img = document.createElement("img");
            img.src = images[i];
            slider.appendChild(img);
        }
    }
}

// 화살표 클릭 이벤트 처리
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadImages();
        updateSliderBar();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalImages - 3) {
        currentIndex++;
        loadImages();
        updateSliderBar();
    }
});

// 슬라이드 바 업데이트 함수
function updateSliderBar() {
    const sliderWidth = slider.offsetWidth;
    const totalSliderWidth = slider.scrollWidth;
    const percentage = (currentIndex / (totalImages - 3)) * 100;
    sliderBarTrack.style.width = `${percentage}%`;
}

// 초기 로딩
loadImages();
updateSliderBar();
