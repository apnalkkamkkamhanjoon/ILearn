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

### 배열과 관련된 메소드
```Javascript
var careers = ["Warroir", "Archer", "Wizard"];
console.log("total careers : " + careers.length);
```
```Javascript
total careers : 3
```
`length`는 메서드가 아니다. 자바스크립트에서 `Array`는 하나의 객체이며 `length`는 `Array`가 가진 멤버 변수다. 배열의 길이가 필요할 때마다 길이를 읽어오는 것 보단 O(N) 길이를 가지고 있는게 O(1) 효율적일 테니까.

```Javascript
var careers = ["Warroir", "Archer", "Wizard"];
console.log("careers : " + careers.join(", "));
```
```Javascript
careers : Warrior, Archer, Wizard
```
`join`은 배열을 붙여 하나의 문자열로 반들어 준다.

```Javascript
var careers = ["Warroir", "Archer", "Wizard"];
console.log("careers : " + careers.reverse().join(', '));
```
```Javascript
careers : Warrior, Archer, Wizard
```
`reverse`는 배열을 반대로 뒤집는 역할 한다.

```Javascript
var careers = ["Warroir", "Archer", "Wizard"];
console.log("careers : " + careers.sort().join(', '));
```
```Javascript
careers : Warrior, Archer, Wizard
```
`sort`는 배열을 정리한다. 현재는 알파뱃 순서대로 정렬되고 있다. `sort`에 함수를 전달하면 자신이 원하는 방식대로 정렬할 수 있다.

```Javascript
var careers = ["Warroir", "Archer", "Wizard"];
var careersOnDlc = ["Assassin", "Samurai"]
console.log("careers : " + careers.concat(carrersOnDlc).join(', '));
```
```Javascript
careers : Warrior, Archer, Wizard, Assassin, Samurai
```
`concat`은 두 배열을 합쳐주는 역할을 한다.

```Javascript
var careers = ["Warroir", "Archer", "Wizard"];
var x = carrers.push("Devil", "Outlaw");
console.log("total careers after push : " + x);

var y = careers.pop();
console.log("pop career : " + y);
```
```Javascript
total careers after push : 5
pop careers : Outlaw
```
`push`와 `pop`은 자료구조 `Stack`에서 다뤄지며 여기서도 동일한 기능을 수행한다. `push`는 맨 뒤에 요소를 삽입 `pop`은 맨 뒤 요소를 꺼내는 것이다. 주로 팬케이크에 비유되곤 한다.

```Javascript
var careers = ["Warrior", "Archer", "Wizard"];

var x = careers.shift();
console.log("shift career : " + x);

var y = careers.unshift("Knight")
console.log("total careers after unshift : " + y);
```
```Javascript
shift carrer : Warrior
total carrers after unshift : 3
```
`shift`는 맨 앞의 요소를 빼는 기능을, `unshift`는 맨 앞에 요소를 삽입하는 기능을 한다.

# 6. 오브젝트(Object)
구조체(struct)처럼 내부에 여러 변수를 가질 수 있고 클래스(class)처럼 내부에 메소드를 포함하고 있는 형식이다. JSON이라고 많이 알려진 형식이다.

### 오브젝트의 선언
```Javascript
var obj = new Object();
var obj = {};
```

### 변수를 가진 오브젝트
hp와 mp를 가진 player를 생성해보자.
```Javascript
var player = {};
player.hp = 100;
player.mp = 300;
```

### 메소드를 가진 오브젝트
플레이어가 후두러 맞는(?) 기능을 넣어보자
```Javascript
var player = {
    hp: 100,
    mp: 300,
    hit: function (damage) {
        this.hp -= damage;
        console.log('player hit damage : ' + damage);
        return this.isDie();
    },
    isDie: function () {
        if (this.hp <= 0) {
            console.log('player is die...');
            return true;
        }
        return false;
    }
};

player.hit(150);
console.log('player left hp : ' + player.hp);
```
```Javascript
player hit damage : 150
player is die...
player left hp : -50
```

### 오브젝트 할당
위는 플레이어 객체가 선언됨과 동시에 사용되고 있다. 만일 클래스 혹은 구조체처럼 단지 구조만 선언하고 싶은 경우엔 어떻게 표현할 수 있을까? 오브젝트를 함수로 선언하면 된다.
```Javascript
var Player = function(name){
    var name = name;
    var hp = 100;
    var mp = 300;

    return{
        hit: function (damage) {
            hp -= damage;
            console.log(name + ' hit damage : ' + damage);
            return this.isDie();
        },
        isDie: function () {
            if (hp <= 0) {
                console.log(name + ' is die...');
                return true;
            }
            return false;
        }
    }
}

var medic = new Player('medic');
medic.hit(50);
// medic hit damage : 50

var fireBet = new Player('fireBet');
fireBet.hit(100);
// fireBet hit damage : 100
// fireBet is die...
```
위는 클로저라는 개념을 응용한 방식이다. 위와 같이 선언하면 하나의 객체를 여러 변수에서 할당받아 사용할 수 있다. 다만 이 경우 같은 기능을 하는 함수가 변수마다 새로 할당되는 문제가 발생한다. 이럴때는 `prototype`을 사용하면 객체끼리 공유하는 함수를 만들 수 있다.
```Javascript
var Player = function(name) {
    this.name = name;
    this.hp = 100;
    this.mp = 300;
}

Player.prototype.hit = function (damage) {
    this.hp -= damage;
    console.log(this.name + ' hit damage : ' + damage);
    return this.isDie();
}

Player.prototype.isDie = function () {
    if (this.hp <= 0) {
        console.log(this.name + ' is die...');
        return true;
    }
    return false;
}

var medic = new Player('medic');
medic.hit(50);
// medic hit damage : 50

var fireBet = new Player('fireBet');
fireBet.hit(100);
// fireBet hit damage : 100
// fireBet is die...
```
다만 위 코드에서는 프로그래머 혹은 사용자가 `medic.hp` 변수를 접근이 가능하다.
```Javascript
console.log(medic.hp)
// 50
```