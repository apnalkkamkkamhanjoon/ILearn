# Scope

> 변수나 함수에 접근할 수 있는 범위를 나타낸다.

## Scope 종류

>  Global Scope(전역 스코프)   
> Block Scope(지역 스코프)


## 전역 스코프 (Global Scope)
> 전역에 선언이 되어있어 어디서나 접근이 가능하다.

## 지역 스코프 (Block Scope)
> 해당 블록(중괄호) 안에서만 접근할 수 있고 바깥에서는 접근할 수 없다. JS에서는 함수가 block scope의 예시이다.
>

## 예시
```js
let global = "Global Scope";

function print() {
    let block = "Block Scope"
    console.log(block); // possible
    console.log(global); // possible
}

print();

console.log(block); // error
console.log(global); // possible
```