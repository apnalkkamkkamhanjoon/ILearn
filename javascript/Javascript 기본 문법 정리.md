# JavaScript 기본 문법 정리

## 1. 변수
자바스크립트에는 변수형(int, double, String)이 존재하지 않는다. `var`이라는 가변형 변수만 존재하여 초기화 할때 형태에 따라서 알아서 할당된다.
```Javascript
var i;
var x = 123;
var y = "123";
var z = false;
var w = null;
```
덧붙히자면 `var`의 유효 범위는 함수 내부로 조건문이나 반복문 안에서 초기화 된 경우라도 함수 내부 블록이라면 어디서나 호출할 수 있다. 최신 자바 스크립트에서 `let`이라는 가변형 블럭 지역 변수와 `const`라는 불변형 블럭 지역 변수가 추가되었다.
```Javascript
let x = 123;
x = "123";

const y = false;
y = null; // error
```

## 2. 연산자
+, -, *, /, % 등의 기본 연산은 물론 ++, --와 같은 증감 연산자도 사용할 수 있다.
```Javascript
a = a + 1 (x)
a += 1 (o)
```
이유는 모르겠지만 자바스크립트에서 `a = a + 1` 과 같은 표현은 쓰지 말라고 돼있다. 무조건 할당 연산자를 사용하라고 한다. 가독성을 위함일까? 또한 자바스크립트는 자바와 마찬가지로 스트링 컨케트네이션이 되므로 문자열을 덧셈기호로 간단히 붙힐 수 있다.
```Javascript
var s = "String1" + "String2";
console.log(s);
```
```Javascript
값 : String1String2
```

## 3. 조건문
```Javascript
a==b
a!=b
a==b && a==c
a==b || a==c
a > b
```

```Javascript
if (a > b) {
    console.log("a is more than b.")
} else if (a == b) {
    console.log("a is the same as b.")
} else {
    console.log("a is less than b.")
}
```

## 4. 함수
선언과 호출은 아래와 같다.
```Javascript
function notify(message) {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something');
```
```Javascript
# NOTIFITAION : say something
```
자바스크립트의 함수는 굉장히 다채롭게 선언할 수 있다. 가령 아래와 같이 함수를 생성할 수도 있다.
```Javascript
var notify = function (message) {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something');
```
자바스크립트 문법에선 화살표 함수라는 개념이 있어 아래와 같이 생성할 수 있다.
```Javascript
var notify = () => {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something');
```
위처럼 여러가지 형식을 가지고 있는데 정해진 규칙은 없으므로 자신이 원하는 방식으로 일관성 있게 작성하면 된다. 필자의 경우에는 함수 내부의 함수나 익명 함수는 화살표 함수로 그 외에는 함수 선언식을 사용한다. 다만 화살표 함수의 경우 최신 문법이므로 구형 브라우저에선 인식되지 않는 점을 참고하자.

값을 반환하는 함수는 아래와 같이 작성한다.

```Javascript
function add(value1, value2) {
    return value1 + value2;
}

var a = 10;
var b = 20;
console.log(add(a, b));
```
```Javascript
30
```

화살표 함수는 아래와 같이 표현
```Javascript
var add = (value1, value2) => value1 + value2;

console.log(add(10, 20));
```
```Javascript
30
```
화살표 함수의 경우 중괄호를 생략할 수 있으며, 중괄호를 생략할 경우 화살표 다음에 선언된 식어 `return`되는 것으로 간주한다.

## 5. 배열
### 배열의 선언
```Javascript
var arr = new Array();
var arr = [];
```

### 배열에 값 삽입
#### 초기화시 값 삽입
```Javascript
var careers = [
    "Warrior",
    "Archer",
    "Wizard"
];
```
#### 인덱스를 이용하여 삽입
```Javascript
var careers = [];
careers[0] = "Warrior";
careers[1] = "Archer";
careers[2] = "Wizard";
```

#### `push`메서드를 사용하여 삽입
```Javascript
var careers = [];
careers.push("Warrior");
careers.push("Archer");
careers.push("Wizard");
```

