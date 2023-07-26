# 인터페이스

> 인터페이스는 상호 간의 정의한 약속 혹은 규칙이다.  
>  아래와 같은 범주에 의해 정의할 수 있다.
>
> - 객체의 스펙(속성과 속성의 타입)
> - 함수의 파라미터
> - 함수의 스펙(파라미터, 반환 타입 등)
> - 배열과 객체를 접근하는 방식
> - 클래스

## 예제

적용하기전

```ts
let person = { name: "Capt", age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}

logAge(person); // 28
```

적용한 후

```ts
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: "Capt", age: 28 };
logAge(person);
```

## 옵션 속성

> 인터페이스를 사용할 때 인터페이스에 정의되어 있는 속성을 모두 다 꼭 사용하지 않아도 된다. 이를 옵션 속성이라 한다.

```ts
interface 인터페이스_이름 {
  속성?: 타입;
}
```

이처럼 속성의 끝에 ?를 붙인다.

**예제**

```ts
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}
brewBeer(myBeer);
```

## 옵션 속성의 장점

> 옵션 속성의 장점은 단순히 인터페이스를 사용할 때 속성을 선택적으로 적용할 수 있다는 것 뿐만 아니라 인터페이스에 정의되어 있지 않은 속성에 대해서 인지시켜줄 수 있다는 점이다.

```ts
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.brewery); // Error: Property 'brewery' does not exist on type 'Beer'
}
brewBeer(myBeer);
```

## 읽기 전용 속성

> 읽기 전용 속성은 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성을 의미한다.

```ts
interface CraftBeer {
  readonly brand: string;
}
```

이처럼 `readonly`를 앞에 붙여준다.

인터페이스로 객체를 선언하고 나서 수정하려면 오류가 난다.

```ts
let myBeer: CraftBeer = {
  brand: "Belgian Monk",
};
myBeer.brand = "Korean Carpenter"; // error!
```

## 읽기 전용 배열

> 배열을 선언할 때 `ReadonlyArray<T>` 타입을 사용하면 읽기 전용 배열을 생성할 수 있다.
>
> 배열을 읽기 전용 속성으로 생성하면 내용을 변경할 수 없으니 주의해서 사용해야 한다.

```ts
let arr: ReadonlyArray<number> = [1, 2, 3];
arr.splice(0, 1); // error
arr.push(4); // error
arr[0] = 100; // error
```

## 객체 선언과 관련된 타입 체킹

> 인터페이스를 이용해 객체를 선언할 때 더 엄격히 타입체킹을 진행한다.

```ts
interface CraftBeer {
  brand?: string;
}

function brewBeer(beer: CraftBeer) {
  // ..
}
brewBeer({ brandon: "what" }); // error: Object literal may only specify known properties, but 'brandon' does not exist in type 'CraftBeer'. Did you mean to write 'brand'?
```

타입 추론을 무시하고 싶다면 아래와 같이 선언한다.

```ts
let myBeer = { brandon: 'what' }';
brewBeer(myBeer as CraftBeer);
```

그럼에도 불구하고 만약 인터페이스 정의하지 않은 속성들을 추가로 사용하고 싶을 때는 아래와 같은 방법을 사용한다.

```ts
interface CraftBeer {
  brand?: string;
  [propName: string]: any;
}
```

## 함수 타입

> 인터페이스는 함수의 타입을 정의할 때도 사용할 수 있다.

```ts
interface login {
  (username: string, password: string): boolean;
}
// 함수의 인자의 타입과 반환 값의 타입을 정합니다.
let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log("로그인 했습니다");
  return true;
};
```

## 클래스 타입

> 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있다.

```ts
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = "Baby Guinness";
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}
```

## 인터페이스 확장

```ts
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";
```

상속받아 사용할 수도있다.

```ts
interface Person {
  name: string;
}
interface Drinker {
  drink: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";
fe.drink = "Beer";
```

## 하이브리드 타입

> 자바스크립트의 유연하고 동적인 타입 특성에 따라 인터페이스 역시 여러 가지 타입을 조합하여 만들 수 있다.

```ts
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = function (beer: string) {} as CraftBeer;
  my.brand = "Beer Kitchen";
  my.brew = function () {};
  return my;
}

let brewedBeer = myBeer();
brewedBeer("My First Beer");
brewedBeer.brand = "Pangyo Craft";
brewedBeer.brew();
```
