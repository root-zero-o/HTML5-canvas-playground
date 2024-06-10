const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); // 그리기 컨텍스트 가져오기

// 캔버스 지원여부 검사
if(!canvas.getContext){
    console.log('캔버스를 지원하지 않습니다 :(')
} else {
    console.log('캔버스!')
}
