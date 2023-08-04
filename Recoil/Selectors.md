# Selectors

> Selector는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수다. 상위의 atoms 또는 selectors가 업데이트되면 하위의 selector 함수도 다시 실행된다. 컴포넌트들은 selectors를 atoms처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트들도 다시 렌더링 된다.

> Selectors는 상태를 기반으로 하는 파생 데이터를 계산하는 데 사용된다. 최소한의 상태 집합만 atoms에 저장하고 다른 모든 파생되는 데이터는 selectors에 명시한 함수를 통해 효율적으로 계산함으로써 쓸모없는 상태의 보존을 방지한다.

> Selectors는 어떤 컴포넌트가 자신을 필요로 하는지, 또 자신은 어떤 상태에 의존하는지를 추적하기 때문에 이러한 함수적인 접근방식을 매우 효율적으로 만든다.

> 컴포넌트의 관점에서 보면 selectors와 atoms는 동일한 인터페이스를 가지므로 서로 대체할 수 있다.

> Selectors는 selector함수를 사용해 정의한다.

## 예시

```js
const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});
```

> `get` 속성은 계산될 함수다. 전달되는 `get` 인자를 통해 atoms와 다른 selectors에 접근할 수 있다. 다른 atoms나 selectors에 접근하면 자동으로 종속 관계가 생성되므로, 참조했던 다른 atoms나 selectors가 업데이트되면 이 함수도 다시 실행된다.
>
> 이 `fontSizeLabelState` 예시에서 selector는 `fontSizeState`라는 하나의 atom에 의존성을 갖는다. 개념적으로 `fontSizeLabelState` selector는 `fontSizeState`를 입력으로 사용하고 형식화된 글꼴 크기 레이블을 출력으로 반환하는 순수 함수처럼 동작한다.
>
> Selectors는 `useRecoilValue()`를 사용해 읽을 수 있다. `useRecoilValue()`는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환한다. `fontSizeLabelState` selector는 writable하지 않기 때문에 `useRecoilState()`를 이용하지 않는다.

```js
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={setFontSize(fontSize + 1)} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}
```
