// https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

/** 경로 그리기 */
/** 경로 그리는 단계
 * 1. 경로 생성
 *  - beginPath() : 하위 경로 모음 초기화
 *  - 실제 경로가 그려지는 위치 설정
 *  - closePath() : 도형을 닫는다 - 선택사항. fill() 호출시 자동 닫힘
 * 2. 그리기 명령어를 사용해 경로상에 그린다
 * 3. 경로를 렌더링하기 위해 윤곽선을 그리거나 도형 내부를 채운다
 */

/** 삼각형 */
ctx.beginPath();
ctx.moveTo(100, 100); // 시작점 설정
ctx.lineTo(200, 300); // 선 그리기
ctx.lineTo(0, 300); // 선 그리기
ctx.fill(); // 닫으면서 도형을 채운다


/** 스마일 */
ctx.beginPath();
ctx.arc(300, 200, 100, 0, Math.PI * 2, true); 
ctx.stroke();