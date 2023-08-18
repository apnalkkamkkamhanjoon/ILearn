# Union Type

> 유니온 타입이란 자바스크립트의 OR 연산자 (`||`) 와 같이 A이거나 B이다라는 의미의 타입이다.

```ts
function logText(text: string | number) {
  // ...
}
```

> 위 함수의 파라미터 `text`에는 문자열 타입이나 숫자 타입이 모두 올 수 있다. 이처럼 `|` 연산자를 이용하여 타입을 여러 개 연결하는 방식을 유니온 타입 정의 방식이라 부른다.

## 장점

> any와 비교하면 자바스크립트로 작성하는 것처럼 동작하고 유니온 타입을 사용하면 타입스크립트의 이점을 살리면서 코딩할 수 있다.

```ts
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixe(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}
```
