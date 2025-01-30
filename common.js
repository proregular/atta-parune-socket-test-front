// common.js
const SockJS = window.SockJS;
const Stomp = window.Stomp;

let stompClient = null;

// WebSocket 연결 함수
function connect(onConnected) {
    // 서버의 WebSocket 엔드포인트로 연결
    const socket = new SockJS('http://localhost:8080/ws-stomp'); // WebSocket 서버 주소
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
}

// 연결 실패 시 실행되는 콜백 함수
function onError(error) {
    console.log("웹소켓 연결 실패", error);
}

export { connect, stompClient }; // 필요한 함수 및 변수만 export