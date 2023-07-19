# 타입스크립트에서의 함수

> 3가지 타입을 정의할 수 있다.
>
> - 함수의 파라미터(매개변수) 타입
> - 함수의 반환 타입
> - 함수의 구조 타입

## 기본 타입 선언

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

++ 함수의 반환 값에 타입을 정하지 않을 때에는 void라도 사용

## 함수의 인자

> 함수의 인자를 모두 필수 값으로 간주합니다. 따라서, 함수의 매개변수를 설정하면 undefined나 null이라도 인자로 넘겨야하며 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인합니다.

```ts
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters
```

++ js와 같이 쓰고싶다면 ?를 이용해서 아래와 같이 정의할 수 있습니다.

```ts
function sum(a: number, b?: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // 타입 에러 없음
```

++ 매개변수 초기화도 ES6문법과 동일하다.

```ts
function sum(a: number, b = "100"): number {
  return a + b;
}
sum(10, undefined); // 110
sum(10, 20, 30); // error, too many parameters
sum(10); // 110
```

## REST문법이 적용된 매개변수

```ts
function sum(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}
```

## this

> 타입스크립트에서 자바스크립트의 `this`가 잘못 사용되었을 때 감지할 수 있다.

자바스크립트에서의 `this`

```js
function 함수명(this: 타입) {
  // ...
}
```

typescript에서의 `this`

```ts
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: "#app",
  count: 10,
  init: function (this: Vue) {
    return () => {
      return this.count;
    };
  },
};

let getCount = vm.init();
let count = getCount();
console.log(count); // 10
```

++ 위의 코드를 타입스크립트로 컴파일 했을 때 만일 --noImplicitThis 옵션이 있더라도 에러가 발생하지 않습니다.

## 콜백에서의 this

> 일반적인 `this`와는 다르게 콜백으로 함수가 전달되었을 때의 `this`를 구분해줘야 할 때가 있습니다. 그럴땐 강제할 수 있습니다.

```ts
interface UIElement {
  // 아래 함수의 `this: void` 코드는 함수에 `this` 타입을 선언할 필요가 없다는 의미입니다.
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClick(this: Handler, e: Event) {
    // 위의 `UIElement` 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용했기 때문에 에러가 발생합니다.
    this.info = e.message;
  }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick); // error!
```

UIElement 인터페이스의 스펙에 맞춰 Handler를 구현하려면 아래와 같이 변경합니다.

```ts
class Handler {
  info: string;
  onClick(this: void, e: Event) {
    // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
    console.log("clicked!");
  }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick);
```

++ 클래스의 메서드 방식으로 선언하는 것과 변수에 화살표 함수를 연결하는 것의 차이점!
