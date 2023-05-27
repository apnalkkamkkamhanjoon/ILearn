# this

> 자바스크립트에서 this는 호출을 뜻한다 즉 선언이 아닌 호출에 따라 값이 달라진다.

## 단독으로 this

```js
let a = this;
console.log(a); // window
```

> this를 그냥 호출해 global object인 [object Window]를 가리킨다.

## 함수에서의 this

```js
function printThis() {
  return this;
}

console.log(printThis()); // window
```

> this는 함수의 주인에게 바인딩 된다.  
> 함수의 주인은 window객체이다.

### 추가 예시

```js
let num = 0;

function addNum() {
  this.num = 100;
  num++;

  console.log(num); // 101
  console.log(window.num); // 101
  console.log(num === window.num); // true
}

addNum();
```

> this.num은 window객체를 가리킨다.  
> 따라서 num은 전역변수를 가리키게 된다.

## Strict(엄격)

```js
function printThis() {
  return this;
}

console.log(printThis()); // undefined
```

> 함수 내부 this에 디폴트 바인딩이 없기 때문에 undefined가 나타난다.

### 추가

```js
let num = 0;

function addNum() {
  this.num = 100; //ERROR! Cannot set property 'num' of undefined
  num++;
}

addNum();
```

> this.num은 undefined.num을 한 것과 똑같아
> 오류가 발생한다.

## 메서드에서의 this

```js
let Person = {
  firstName: "Han",
  lastName: "Joon",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

Person.fullName(); //"Han Joon"
```

> 메서드 호출 시 메서드 내부 코드에서 사용된 this는
> 해당 메서드를 호출한 객체로 바인딩된다.

### 추가

```js
let num = 0;

function showNum() {
  console.log(this.num);
}

showNum(); //0

let obj = {
  num: 200,
  func: showNum,
};

obj.func(); //200
```

> 함수 내의 this는 window객체를 가리키고있기 때문에 전역변수인 num이 나타나게된다.
> 반면에 메서드 내의 this는 호출한 객체를 가리키기에 200이 찍히게된다.
>

## EventListener에서의 this
```js
const radio = document.querySelector("input");
radio.addEventListener("change", function thisShow(event) {
  console.log(this);
})
```
> EventListener 안에서의 this는 event.currentTarget을 가리킨다.
