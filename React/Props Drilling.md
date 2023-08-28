# Props Drilling

> Props Drilling은 props를 오직 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트를 거치면서 React Comoponent트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정이다.

```js
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FirstComponent content="Who needs me?" />
    </div>
  );
}

function FirstComponent({ content }) {
  return (
    <div>
      <h3>I am the first component</h3>;
      <SecondComponent content={content} />|
    </div>
  );
}

function SecondComponent({ content }) {
  return (
    <div>
      <h3>I am the second component</h3>;
      <ThirdComponent content={content} />
    </div>
  );
}

function ThirdComponent({ content }) {
  return (
    <div>
      <h3>I am the third component</h3>;
      <ComponentNeedingProps content={content} />
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>;
}
```

> componentNeedingProps 컴포넌트에서 해당 props를 사용하기 위해 content를 전달하는 과정으로 `App > first > second > third > componentNeedingProps` 순이 되겠다.

## 문제

> props 전달이 3~5개 정도면 Props Drilling은 문제가 되지 않는다. 하지만 Props 전달이 10개, 15개 같이 더 많은 과정을 거치게 된다면 코드를 읽을 때 해당 props를 추적하기가 힘들어진다.

## 해결법

1. 전역 상태 라이브러리 사용한다.

   - redux, Mobox, recoil 등을 사용하여 해당 값이 필요한 컴포넌트를 불러 사용할 수 있다.

2. Chlidren을 적극 사용한다.
