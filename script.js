document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('image-grid');
    const totalImages = 365;

    // 이미지 동적 추가
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `images/${i}.jpg`; // 이미지 경로 설정
        img.alt = `Image ${i}`;
        imageGrid.appendChild(img);
    }
});
