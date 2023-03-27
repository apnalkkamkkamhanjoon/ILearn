# 기본 타입
- boolean
- number
- string
- object
- array
- tuple
- enum
- any
- void
- null
- undefined
- never

# String
```ts
let str:string = 'hi';
```
`:`을 이용해 코드에 타입을 정의하는 것을 타입 표기라 한다.

# Number
```ts
let num:number = 123;
```

# Boolean
```ts
let bool:boolean = true;
```

# Object

# Array
```ts
let arr:number[] = [1,2,3];
```
제레닉 사용
```ts
let arr:Array<number> = [1,2,3];
```

# Tuple
```ts
let arr:[string, number] = ['hi', 123];
```
정의하지 않은 타입, 인덱스로 접근할 경우 오류 발생
```ts
arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, Property '5' does not exist on type '[string, number]'.
```

# Enum
Enum은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다.
```ts
enum Avengers {Capt, IronMan, Thor}
let hero: Avengers = Avg.Capt;
```
이넘은 인덱스 번호로도 접근할 수 있습니다.
```ts
enum  Avengers {Capt, IronMan, Thor}
let hero: Avengers = Avengers[0];
```
편의를 위해서 인덱스를 사용자 편의로 할 수 있습니다.
```ts
enum Avengers {Capt=[2], IronMan, Thor}
let hero: Avengers = Avengers[2]; //Capt
let hero: Avengers = Avengers[4];
```

# Any
모든 타입에 대해서 허용한다는 의미를 갖고 있습니다.
```ts
let str: any = 'hi';
let num: any = 123;
let arr: any = ['a', 2, true];
```

# Void
변수에는 `undefined`와 `null`만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입입니다.
```ts
let unuseful : void = undefined;
function notuse(): void {
    console.log('sth');
}
```

# Never
함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입입니다.
```ts
function neverEnd(): never{
    while(true){

    }
}
```