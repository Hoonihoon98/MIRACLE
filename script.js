// 이미지 파일 배열 생성
const images = [];
const totalImages = 365; // 총 이미지 수

// 1번부터 365번까지의 이미지 파일을 배열에 추가
for (let i = 1; i <= totalImages; i++) {
    images.push(`images/miracle (${i}).jpg`);  // 이미지 파일 경로 패턴 (괄호와 공백 포함)
}

console.log(images); // 배열을 콘솔에서 확인
