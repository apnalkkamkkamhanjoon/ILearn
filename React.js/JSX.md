# JSX

## JSX의 정의

JSX는 리엑트에서 기본 생김새를 정의할 때 사용하는 문법이다. 얼핏보면 HTML처럼 생겼지만 실제로는 JS이다.<br/>

```Javascript
return <div> 안녕하세요</div>;
```

## Babel

Babel은 자바스크립트의 문법을 확장해주는 도구다.
지원되지않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법을 정식인 JS 형태로 변환시켜주며 구형 브라우저(이걸 쓸까?)에서도 실행 시켜줄 수 있게 한다.<br/>
<br/>
JSX가 JS로 변환이 될 수있게 하려면 지켜야하는 몇가지 규칙이 있다. 밑 문법들을 준수한다면 리엑트 컴포넌트를
개발하는데 문제가 없을것이다.

## 규칙

### 꼭 닫혀야 하는 태그

```Javascript
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <div><- 이부분이 문제!
    </div>
  );
}
```

태그를 열었으면 꼭 `<div><div/>`이렇게 닫아주어야 한다.<br/>
HTML에서는 `<br> <input>`태그를 사용할때 닫지 않곤 하지만 React에서는 닫아줘야 한다.

```Javascript
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <input /> <-
      <br /> <-
    </div>
  );
}
```

### 꼭 감싸져야하는 태그

두개 이상의 태그는 꼭 감싸져야 한다.

```Javascript
function App() {
  return (
    <Hello /> <-
    <div>안녕히계세요.</div> <-
  );
}
```

이걸 해결 하기 위해

```Javascript
function App() {
  return (
    <div>
      <Hello />
      <div>안녕히계세요</div>
    </div>
  );
}
```

이렇게 하곤하는데 단순히 감쌀려고 `<div>`태그를 사용하는 것은 별로 좋지 않은 상황이 될 수도 있다.<br/>그래서 리엑트의 Fragment를 사용한다.

```Javascript
function App() {
  return (
    <> <-
      <Hello />
      <div>안녕히계세요</div>
    </> <-
  );
}
```

태그를 작성할 때 아무것도 작성하지 않으면 Fragment가 되는데 Fragment는 브라우저에 따라 별도의 엘리먼트로 나타나지 않는다.

### JSX 안에 자바스크립트 값 사용하기

JSX 내부에 자바스크립트 값을 사용하려면 {}로 감싸주어야한다.

```Javascript
const name = "한준"
function App(){
    return(
        <>
            <Hello/>
            <div>{name}</div>
        </>
    )
}
```

### Style과 ClassName

JSX 에서 태그에 style 과 CSS class 를 설정하는 방법은 HTML 에서 설정하는 방법과 다릅니다.

인라인 스타일은 객체 형태로 작성을 해야하며, `background-color`처럼  `-`로 구분되어있는 이름들은
`backgroundcolor`처럼 camelCase 형태로 네이밍 해주어야한다.
```Javascript
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black', <-
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}
```
그리고 Css 클래스를 설정할때는 `class=`이 아닌 `className=`으로 설정을 해주어야 한다.
```Javascript
App.css
.gray-box {
  background: gray;
  width: 64px;
  height: 64px;
}

App.js
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div> <-
    </>
  );
}
```

### 주석

JSX에서의 주석은 `{/* 안냥하세요 */}`형태로 작성한다.<br/>
추가적으로 열리는 태그 내부에서는 `// 이런형태` 로도 작성할 수 있다.
```Javascript
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello // 열리는 태그 내 주석
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}
```