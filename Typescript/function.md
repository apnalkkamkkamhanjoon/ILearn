# 타입스크립트의 함수

타입스크립트의 함수는 3가지로 정의할 수 있다. - 함수의 파라미터(매개변수) 타입 - 함수의 반환 타입 - 함수의 구조 타입

# 함수의 기본적 타입 선언

일반 js 함수

```js
function sum(a, b) {
  return a + b;
}
```

ts 함수

```js
function sum(a: number, b: number): number {
  return a + b;
}
```

기존 js함수의 선언 방식에서 **매개변수** 와 함수의 **반환 값** 에 타입을 추가했습니다.

> Tip<br/> 함수의 반환 값을 정하지 않을때는 `void`라도 사용

# 함수의 인자

타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주합니다. `undefined`나 `null`이라도 넘겨야하며 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인합니다.

정의하자면 정의된 매개변수 값만 받을 수 있고 추가로 인자를 받을 수 없다는 의미입니다.

```ts
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters
```

자바스크립트와 같은 인자를 필수 값으로 넘기고 싶지 않을때는 `?`를 사용합니다.

```ts
function sum(a: number, b?: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // 타입에러 없음
```

매개변수 초기화는 ES6 문법과 동일합니다.

```ts
function sum(a: number, b = "100"): number {
  return a + b;
}
sum(10, undefined); // 110
sum(10, 20, 30); // error, too many parameters
sum(10); // 110
```

# REST 문법이 적용된 매개변수

ES6 문법에서 지원하는 Rest 문법은 타입스크립트에서 다음과 같이 사용할 수 있습니다.

```ts
function sum(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}
```

# this

ts에서 js의 `this`가 잘못 사용되었을때 감지할 수 있습니다.

타입스크립트의 `this`가 가리키는 것을 명시할려면 아래와 같은 문법을 사용합니다.

```ts
function 함수명(this: type) {
  // ...
}
```

실제로 써보자면

```ts
interface Vue {
  el: string;
  counter: number;
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
console.log(count);
```

위의 코드를 타입스크립트로 컴파일 했을 때 만일 `--noImplicitThis` 옵션이 있더라도 에러가 발생하지 않습니다.

# 콜백에서의 this

```ts
interface UIElemnet {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
  info: string;
  onClick(this: Handler, e: Event) {
    this.info = e.message;
    // 위의 `UIElement` 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용했기 때문에 에러가 발생합니다.
  }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick);
```
만약 `UIElement` 인터페이스의 스펙에 맞춰 `Handler`를 구현하려면 아래와 같이 변경합니다.
```ts
class Handler {
    info: string;
    onClick(this: void, e: Event) {
        
        console.log('clicked!');
    }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick);
```