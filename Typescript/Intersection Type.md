# Intersection Type

> 인터 섹션 타입은 여러 타입을 모두 만족하는 하나의 타입을 의미한다.

```ts
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer;
```

> `Person`인터페이스와 `Developer`인터페이스의 타입 정의를 `&`연산자를 사용해 합친 후 `Capt`라는 타입에 할당했다. 결과로 `Capt`의 타입은 아래와 같다.

```ts
{
    name: string,
    age: number;
    skill: string;
}
```
