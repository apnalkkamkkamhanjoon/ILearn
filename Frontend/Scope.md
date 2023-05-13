# Scope

> 변수나 함수에 접근할 수 있는 범위를 나타낸다.
>
> > Global Scope(전역 스코프)와
> > Block Scope(지역 스코프)가 있다.

## Global Scope
> 전역에 선언되어있어 어느 곳에서든지 접근 할 수 있다.

## Block Scope
> 해당 블록 안에서만 접근할 수 있고 외부에서는 접근할 수 없다. JS에서는 함수가 block scope의 예시이다.

## 예시
```js
let global = "전역스코프";

function print() {
    let block = "블록스코프"
    console.log(block); // 가능
    console.log(global); // 가능
}

print();

console.log(block); // 에러남
console.log(global); // 가능
```