# Closure

> 함수와 함수가 선언된 어휘적 환경의 조합이다.

## 유효범위 지정

```js
function init() {
  var name = "Hanjoon"; // init에 의해 생성된 지역 변수이다.
  function displayName() {
    // 내부 함수이며, 클로저다
    alert(name); // 부모 함수에서 선언된 변수를 사용
  }
  displayName();
}
init();
```
