const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 그리기 컨텍스트 가져오기

ctx.fillRect(0, 0, 100, 100) // 사각형
ctx.strokeRect(100, 100, 50, 50) // 직사각형 윤곽선
ctx.clearRect(0,0, 10, 10) // 해당 부분 지우기