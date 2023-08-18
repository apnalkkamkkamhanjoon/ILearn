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

## 주의할 점

> 논리적으로 유니온 타입은 OR, 인터섹션 타입은 AND라 생각할 수 있다. 하지만 인터페이스와 같은 타입을 다룰때에는 논리적 사고를 주의해야 한다.

```ts
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
```

> `introduce()` 함수의 파라미터 타입을 `Person`, `Developer` 인터페이스의 유니온 타입으로 정의했다. 유니온 타입은 A도 될 수 있고 B도 될 수 있는 타입일 꺼라 생각하면 파라미터의 타입이 `Person`도 되고 `Developer`도 될 수 있으니까 함수 안에서 사용이 가능할 수 있을거라 생각할 수 있다.
> 하지만 타입스크립트의 관점에서는 `introduce()` 함수를 호출하는 시점에서 `Person`타입이 올지 `Developer`타입이 올지 알 수가 없어 어느 타입이 들어오던간에 오류가 안나는 방향으로 타입을 추론하게 된다.

```ts
const capt: Person = { name: "capt", age: 100 };
introduce(capt); //만약 introduce 함수 안에서 someone.skill 속성을 접근하고 있으면 함수에서 오류가 발생한다.
```

```ts
const tony: Developer = { name: "tony", skill: "iron making" };
introduce(tony); // 만약 introduce함수 안에서 someone.age 속성을 접근하고 있으면 함수에서 오류가 발생한다.
```

> 결과적으로 `introduce()` 함수 안에서는 별도의 타입 가드를 사용해 타입의 범위를 좁히지 않는 이상 기본적으로는 `Person`과 `Developer` 두 타입에 공통적으로 들어있는 속성인 `name`만 접근할 수 있게 된다.

```ts
function introduce(someone: Person | Developer) {
  console.log(someone.name); // 정상 동작
}
```
