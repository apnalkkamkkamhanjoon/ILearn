# useCallback
> `useMemo`와 비슷한 Hook이다.
`useMemo` 는 특정 결과값을 재사용 할 때 사용하는 반면, `useCallback` 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.

## 사용법
```js
const 함수명 = useCallback(함수, deps);
```