// 완전한 형태의 URI
const uri = 'http://example.com?name=박상준&job=programmer&niceguy';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc);
