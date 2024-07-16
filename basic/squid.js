/** 삼각형 */
ctx.beginPath();
ctx.moveTo(100, 100); // 시작점 설정
ctx.lineTo(200, 200); // 선 그리기
ctx.lineTo(0, 200); // 선 그리기
ctx.lineTo(100, 100);
ctx.stroke();

// ctx.fill(); // 닫으면서 도형을 채운다

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(40, 300);
ctx.lineTo(160, 300);
ctx.lineTo(150, 200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(80, 320, 40, Math.PI * 0.7, Math.PI * 1.2);
ctx.arc(80, 320, 40, Math.PI * 0.7, Math.PI * 1.2);
ctx.stroke();

// 오징어 그리기 진행중
