# Enum

> 이넘은 특정 값들의 집합을 의미하는 자료형이다.
>
> 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원한다.

## 숫자형 이넘

> 타입스크립트에서 숫자형 이넘은 밑과 같이 선언한다.

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

> 위와 같이 숫자형 이넘을 선언할 때 초기 값부터 차례로 1씩 증가한다.

```
Up - 1
Down - 2
Left - 3
Right - 4
```

> 초기 값을 주지 않으면 0부터 차례로 1씩 증가한다.

```ts
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
```

## 숫자형 이넘 예제

```ts
enum Response {
  No = 0,
  Yes = 1,
}

functnio respond(recipient: string, message: Response): void {
    // ...
}
respond("Captain Pangyo", Response.yes);
```

> 숫자형 이넘에서 주의할 점은 선언할 때 만약 이넘 값에 다른 이넘 타입의 값을 사용하면 이넘의 첫 번째 값에 초기화를 해줘야 한다.

```ts
enum Wrong {
  A = getSomeValue(),
  B, // Error, 초기화가 필요함
}
```

## 문자형 이넘

> 숫자형 이넘과 개념적으로 거의 비슷하지만 런타임에서 미세한 차이가 있다.
>
> 문자형 이넘은 이넘 값 전부 다 특정 문자 또는 다른 이넘 값으로 초기화 해야 한다.

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

> 문자형 이넘에는 숫자형 이넘과는 다르게 auto-incrementing이 없다. 대신 디버깅을 할 때 숫자형 이넘의 값은 가끔 불명확하게 나올 때 가 있지만 문자형 이넘은 항상 명확한 값이 나온다.

## 복합 이넘 (Heterogeneous Enums)

> 기술적으로 이넘에 문자와 숫자를 혼합하여 생성할 수 있다.

```ts
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
```

> 이 방식을 권고하진 않는다. 같은 타입으로 이루어진 이넘을 사용하는 것을 권고한다.

## 런타임 시점에서 이넘 특징

> 이넘은 런타임시 실제 객체 형태로 존재한다.

```ts
enum E {
  X,
  Y,
  Z,
}
function getX(obj: { X: number }) {
  return obj.X;
}
getX(E); // 이넘 E의 X는 숫자이기 때문에 동작한다.
```

## 컴파일 시점에서의 이넘 특징

> 이넘이 런타임 시점에서는 실제 객체지만 `keyof`를 사용할 때 주의해야 한다. 일반적으로 `keyof` 대신 `typeof`를 사용한다.

```ts
enum LongLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is: ", key);
    console.log("Log level value is: ", num);
    console.log("Log level message is: ", message);
  }
}
printImportant("ERROR", "This is a message");
```

## 리버스 매핑

> 리버스 매핑은 숫자형 이넘에만 존재한다. 이넘의 `key`로 `value`를 얻을 수 있고 `value`로 `key` 를 얻을 수도 있다.

```ts
enum Enum {
  A,
}
let a = Enum.A; // 키로 값을 획득한다.
let keyName = Enum[a]; // 값으로 키를 획득한다.
```

> 문자형 이넘에는 리버스 매핑이 존재하지 않는다.
