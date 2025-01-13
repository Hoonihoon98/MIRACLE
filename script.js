// 이미지 파일 경로 배열
const images = [];
const totalImages = 365;

for (let i = 1; i <= totalImages; i++) {
  images.push(`images/miracle (${i}).jpg`);
}

let currentIndex = 0;
const imagesContainer = document.querySelector('.images-container');

// 이미지 표시 함수
function updateImages() {
  imagesContainer.innerHTML = ''; // 기존 이미지 삭제

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('image');
    img.classList.add(index === currentIndex ? 'active' : 'inactive');
    imagesContainer.appendChild(img);
  });
}

// 좌우 화살표 클릭 이벤트
document.getElementById('left-arrow').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // 마지막 이미지로 돌아가기
  }
  updateImages();
});

document.getElementById('right-arrow').addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 첫 번째 이미지로 돌아가기
  }
  updateImages();
});

// 슬라이드 바 클릭 이벤트
document.getElementById('slider-bar').addEventListener('input', (e) => {
  currentIndex = e.target.value - 1; // 슬라이드 바에서 선택한 이미지로 이동
  updateImages();
});

// 초기 이미지 업데이트
updateImages();
