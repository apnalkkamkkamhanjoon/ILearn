# JSX
자바스크립트 XML의 약어로, React에서 UI를 구성하기 위한 문법입니다. JSX는 HTML과 매우 유사한 형태로 작성되며, 이를 React 엘리먼트로 변환하는 역할을 한다.

## 예시
```jsx
<button onClick={() => alert('Hello World!')}>Click Me</button>
```

위의 JSX 코드는 다음과 같은 React 엘리먼트로 변환된다.

```js
React.createElement('button', {onClick: () => alert('Hello World!')}, 'Click Me');
```

> 이렇게 생성된 React 엘리먼트는 이후 React의 가상 DOM(Virtual DOM)을 통해 실제 DOM에 렌더링되어 사용자에게 UI를 제공하게 된다.

