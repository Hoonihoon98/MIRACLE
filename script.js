const totalImages = 365;
const slider = document.querySelector('.slider');
const indicatorContainer = document.querySelector('.indicator-container');
let currentIndex = 0;

// 이미지 불러오기
for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `images/image${i}.jpg`;
  img.alt = `Image ${i}`;
  slider.appendChild(img);
}

// 슬라이드 이미지 이동
function moveToSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  if (index < 0) {
    currentIndex = totalImages - 1;
  } else if (index >= totalImages) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === currentIndex) {
      slide.classList.add('active');
    }
  });

  updateIndicators();
}

// 좌우 화살표 클릭 이벤트
document.querySelector('.prev').addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// 인디케이터 클릭 이벤트
function createIndicators() {
  for (let i = 0; i < totalImages; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => moveToSlide(i));
    indicatorContainer.appendChild(indicator);
  }
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, idx) => {
    if (idx === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

createIndicators();
moveToSlide(currentIndex);
