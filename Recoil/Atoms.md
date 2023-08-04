# Atoms

> Atoms는 상태의 단위이며, 업데이트와 구독이 가능하다. atom이 업데이트 되면 각각 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다. atoms는 런타임에서 생성될 수 있다. Atoms는 React의 로컬 컴포넌트의 상태 대신 사용할 수 있다. 동일한 atom이 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트는 상태를 공유한다.

## 예시

> Atoms는 `atom`함수를 사용해 생성한다.

```js
const fontSizeState = atom({
  key: "fontSizeState",
  default: 14,
});
```

> 컴포넌트에서 atom을 읽고 쓰려면 `useRecoilSelector`라는 훅을 사용한다. React의 `useState`와 비슷하지만, 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있다.

```js
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button
      onClick={() => setFontSize((size) => size + 1)}
      style={{ fontSize }}
    >
      Click to Enlarge
    </button>
  );
}
```

> 버튼을 클릭하면 버튼의 글꼴 크기가 1만큼 증가하며, fontSizeState atom을 사용하는 다른 컴포넌트의 글꼴 크기도 같이 변화한다.

```js
function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{ fontSize }}>This text will increase in size too.</p>;
}
```
