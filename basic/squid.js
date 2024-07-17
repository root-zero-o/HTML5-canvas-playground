/** 삼각형 */
// 모자(?)
ctx.beginPath();
ctx.moveTo(100, 100); // 시작점 설정
ctx.lineTo(200, 200); // 선 그리기
ctx.lineTo(0, 200); // 선 그리기
ctx.lineTo(100, 100);
ctx.stroke();

// 몸통
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(40, 300);
ctx.lineTo(160, 300);
ctx.lineTo(150, 200);
ctx.stroke();
ctx.closePath();

// 눈
ctx.beginPath();
ctx.arc(70, 230, 10, Math.PI * 1, Math.PI * 0); // x, y, 반지름, startAngle, endAngle, 시계방향(default : false - 시계방향)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(120, 230, 10, Math.PI * 1, Math.PI * 0);
ctx.stroke();
ctx.closePath();

// 다리
const legHalf = 40;
const legGap = 15;
let startX = 40;
let startY = 300;

const drawLeg = (idx) => {
  let currentX = startX + idx * legGap;
  let currentY = startY;
  // 1번 꼬불이
  ctx.beginPath();
  ctx.moveTo(currentX, currentY);
  ctx.arcTo(
    currentX - legHalf,
    currentY + legHalf,
    currentX,
    currentY + 2 * legHalf,
    Math.sqrt(legHalf ** 2 + legHalf ** 2)
  );
  ctx.stroke();

  // 기준점 이동
  currentX = currentX;
  currentY = currentY + 2 * legHalf;

  // 2번 꼬불이
  ctx.beginPath();
  ctx.moveTo(currentX, currentY);
  ctx.arcTo(
    currentX + legHalf,
    currentY + legHalf,
    currentX,
    currentY + 2 * legHalf,
    Math.sqrt(legHalf ** 2 + legHalf ** 2)
  );

  ctx.stroke();
};

for (let i = 0; i < 7; i++) {
  drawLeg(i);
}

// 따봉 다리
ctx.beginPath();
ctx.arc(160, 300, 20, Math.PI * 0, Math.PI * 1); // x, y, 반지름, startAngle, endAngle, 시계방향(default : false - 시계방향)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(180, 300);
ctx.arcTo(180, 240, 240, 240, 20);
ctx.stroke();

// 따봉 엄지
ctx.beginPath();
ctx.moveTo(200, 240);
ctx.lineTo(200, 210);
ctx.stroke();

// 따봉 주먹
ctx.beginPath();
ctx.arc(200, 230, 10, Math.PI * 1.5, Math.PI * 0.5);
ctx.stroke();
