# React.memo

## React.memo 알아보기
컴포넌트의 `props` 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 `React.memo` 라는 함수에 대해서 알아보겠습니다.

이 함수를 사용한다면, 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해줄수있다.

사용법은 굉장히 쉽다.

그냥, 감싸주시면 된다.

## 내가 새로 찾아본거
React.memo가 상세히 설명이 안되있어서 내가 다시 찾아서 써보겠다.

React.memo는 Memoization(메모이제이션) 기법으로 동작하며, 고차 컴포넌트(Higher Order Component, HOC)이다.

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* props를 사용하여 렌더링 */
});
```

## 후회
React.memo는 좀 부실하다. 이건 나중에 좀 더 성장해서 공부해보겠다.