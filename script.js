// 슬라이더 이미지와 인디케이터 생성
const totalImages = 365;
const slider = document.querySelector('.slider');
const indicatorContainer = document.querySelector('.indicator-container');

let currentIndex = 0;

// 이미지와 인디케이터를 동적으로 생성하는 함수
const generateImagesAndIndicators = () => {
  for (let i = 1; i <= totalImages; i++) {
    // 이미지 생성
    const img = document.createElement('img');
    img.src = `images/${i}.jpg`;
    img.alt = `이미지 ${i}`;
    slider.appendChild(img);

    // 인디케이터 생성
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 1) {
      indicator.classList.add('active');
    }
    indicatorContainer.appendChild(indicator);
  }
};

// 슬라이더 업데이트 함수
const updateSlider = () => {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;

  // 인디케이터 업데이트
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
};

// 화살표 버튼 클릭 이벤트
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

// 처음에 이미지와 인디케이터 생성하고 슬라이더 업데이트
generateImagesAndIndicators();
updateSlider();
