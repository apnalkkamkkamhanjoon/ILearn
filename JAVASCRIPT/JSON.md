# JSON

> JavaScript Object Notation  
> 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식

## 특징

- 서버와 클라이언트 간의 교류에서 일반적으로 많이 사용된다.
- 자바스크립트 객체 표기법과 아주 유사하다.
- 자바스크립트를 이용하여 JSON 형식의 문서를 쉽게 자바스크립트 객체로 변환할 수 있는 이점이 있다.
- JSON 문서 형식은 자바스크립트 객체의 형식을 기반으로 만들어졌다.
- 자바스크립트의 문법과 굉장히 유사하지만 텍스트 형식일 뿐이다.
- 다른 프로그래밍 언어를 이용해서도 쉽게 만들 수 있다.
- 특정 언어에 종속되지 않으며, 대부분의 프로그래밍 언어에서 JSON 포맷의 데이터를 핸들링 할 수 있는 라이브러리를 제공한다.

## 문법

```json
{
  "employees": [
    {
      "name": "Surim",
      "lastName": "Son"
    },
    {
      "name": "Someone",
      "lastName": "Huh"
    },
    {
      "name": "Someone else",
      "lastName": "Kim"
    }
  ]
}
```

- JSON 형식은 자바스크립트 객체와 마찬가지로 key / value가 존재할 수 있으며 key값이나 문자열은 항상 쌍따옴표를 이용하여 표기해야한다.
- 객체, 배열 등의 표기를 사용할 수 있다.
- 일반 자바스크립트의 객체처럼 원하는 만큼 중첩시켜서 사용할 수도 있다.
- JSON형식에서는 null, number, string, array, object, boolean을 사용할 수 있다.

## 형식

### 1. name-value형식의 쌍

- 여러가지 언어들에서 object등으로 실현되었다.
- { String key : String value }

```json
{
  "firstName": "Kwon",
  "lastName": "YoungJae",
  "email": "kyoje11@gmail.com"
}
```

### 2. 값들의 순서화된 리스트 형식

- 여러가지 언어들에서 배열(Array) 등으로 실현되었다.
- [value1, value2, ...]

```json
{
  "firstName": "Kwon",
  "lastName": "YoungJae",
  "email": "kyoje11@gmail.com",
  "hobby": ["puzzles", "swimming"]
}
```

## 문제점

AJAX 는 단순히 데이터만이 아니라 JavaScript 그 자체도 전달할 수 있다. 즉 JSON데이터라고 해서 받았는데 단순 데이터가 아니라 JavaScript가 될 수도 있고, 그게 실행 될 수 있다는 것이다. 데이터인줄 알고 받았는데 악성 스크립트가 될 수 있는 데참사가 일어날 수도 있다.

### 해결

순수하게 데이터만 추출하기 위한 JSON 관련 라이브러리를 따로 사용하기도 한다.

## JSON을 JavaScript Object로 변환하기

```js
var jsonText = '{ "name": "Someone else", "lastName": "Kim" }'; // JSON 형식의 문자열
var realObject = JSON.parse(jsonText);
var jsonText2 = JSON.stringify(realObject);

console.log(realObject);
console.log(jsonText2);
```

- JSON.parse : JSON 형식의 텍스트를 자바스크립트 객체로 변환한다.
- JSON.stringify : 자바스크립트 객체를 JSON 텍스트로 변환한다.
