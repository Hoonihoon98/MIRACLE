let images = [];
let totalImages = 365; // 총 이미지 수

// 이미지 파일 경로 설정 (miracle (1).jpg 부터 miracle (365).jpg까지)
for (let i = 1; i <= totalImages; i++) {
    images.push(`images/miracle (${i}).jpg`); // miracle (i).jpg 형식으로 이미지 배열에 추가
}

let currentIndex = 0; // 현재 표시된 이미지의 인덱스
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 초기 이미지 설정
sliderImage.src = images[currentIndex];

// 이전 이미지로 이동하는 함수
function showPreviousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    sliderImage.src = images[currentIndex];
}

// 다음 이미지로 이동하는 함수
function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    sliderImage.src = images[currentIndex];
}

// 버튼 클릭 이벤트 설정
prevBtn.addEventListener("click", showPreviousImage);
nextBtn.addEventListener("click", showNextImage);
