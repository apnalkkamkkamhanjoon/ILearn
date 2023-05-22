# Hoisting

> 자바스크립트 함수 안에 있는 선언들(변수, 함수)을 모두 끌어올려서
> 해당 함수 유효범위의 최상단에 선언하는 것이다.

## 범위

> block scope, function scope, global scope

## var Hoisting

> 변수 할당이 선언보다 위에 있어도 오류가 생기지 않는다.

```js
name = "Joon";
var name;
```

## function Hoisting

> 함수 호출이 선언보다 위에 있어도 오류가 생기지 않는다.

```js
let name = "Joon";

pringName(name);

function printName(name) {
  console.log(name);
}
```

## 대상

> var와 함수 선언문만 hoisting대상이고 그 외의
> const, let, 함수 표현식은 hoisting대상이 아니다.