// 이미지 파일 배열 생성
const images = [];
const totalImages = 365; // 총 이미지 수

// 이미지 파일 경로 설정
for (let i = 1; i <= totalImages; i++) {
    images.push(`images/miracle (${i}).jpg`);
}

// 슬라이더 요소
const slider = document.getElementById("slider");

// 이미지 로드 함수
function loadImages() {
    // 기존 이미지를 초기화
    slider.innerHTML = '';

    // 1개의 이미지만 보여주기 (기본적으로 하나씩만 보여줄 때)
    const img = document.createElement("img");
    img.src = images[0];
    slider.appendChild(img);
}

// 초기 로딩
loadImages();
