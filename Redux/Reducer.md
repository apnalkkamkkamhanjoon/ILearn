# Reducer (리듀서)

> 리듀서는 변화를 일으키는 함수다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다. 그리고 두 값을 감고해 새로운 상태를 만들어 반환해준다.

```js
const initialState = {
  counter: 1,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
```

이 리듀서는 `useReducer` 를 사용할때 작성하는 리듀서와 똑같은 형태를 가지고 있다.

> `useReducer` 에선 일반적으로 `default:` 부분에 `throw new Error('Unhandled Action')`과 같이 에러를 발생시키도록 처리하는게 일반적인 반면 리덕스의 리듀서에서는 기존 `state`를 그대로 반환하도록 작성해야한다.

리덕스를 사용 할 때에는 여러개의 리듀서를 만들고 이를 합쳐서 루트 리듀서 (Root Reducer)를 만들 수 있다. + (루트 리듀서 안의 작은 리듀서들은 서브 리듀서라고 부릅니다.)