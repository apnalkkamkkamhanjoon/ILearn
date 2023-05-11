# Redux Keyword
>리덕스에서 사용되는 키워드 알아보기

## 1. Action (액션)
>상태에 어떠한 변화가 필요하게 될 때, 액션이란 것을 발생시킨다. 이는, 하나의 객체로 표현이 되는데, 액션 객체는 다음과 같은 형식으로 이뤄져있다.
```js
{
  type: "TOGGLE_VALUE"
}
```
액션 객체는 `type` 필드를 필수적으로 가지고 있어야하고 그 외의 값들은 개발자 마음대로 넣어줄 수 있다.
```js
{
  type: "ADD_MEMO",
  data: {
    id: 0,
    text: "즐거운 5월달"
  }
}
```
```js
{
  type: "CHANGE_INPUT",
  text: "신나는 5월달"
}
```

## 2. Action Creator (액션 생성함수)
> 액션을 만드는 함수다. 파라미터를 받아와서 액션 객체 형태로 만든다.
```js
export function addTodo(data) {
  return {
    type: "ADD_MEMO",
    data
  };
}

// 화살표 함수로도 만들 수 있다.
export const changeInput = text => ({ 
  type: "CHANGE_INPUT",
  text
});
```
>액션 생성함수를 만들어서 사용하는 이유는 나중에 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함이다. 그래서 보통 함수 앞에 `export` 키워드를 붙여서 다른 파일에서 불러와서 사용한다.

리덕스를 사용 할 때 액션 생성함수를 사용하는것이 필수적이진 않습니다. 액션을 발생 시킬 때마다 직접 액션 객체를 작성할수도 있다.

# 3. Reducer (리듀서)
> 리듀서는 변화를 일으키는 함수다. 두가지의 파라미터를 받아온다.
```js
function reducer(state, action) {
  // 상태 업데이트 로직
  return alteredState;
}
```
리듀서는, 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환한다. 이 리듀서는 `useReducer` 를 사용할때 작성하는 리듀서와 똑같은 형태를 가지고 있다.

### 리듀서를 사용한 간단한 counter 예제
```js
function counter(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}
```
> `useReducer` 에선 일반적으로 `default:` 부분에 `throw new Error('Unhandled Action')`과 같이 에러를 발생시키도록 처리하는게 일반적인 반면 리덕스의 리듀서에서는 기존 `state`를 그대로 반환하도록 작성해야한다.

리덕스를 사용 할 때에는 여러개의 리듀서를 만들고 이를 합쳐서 루트 리듀서 (Root Reducer)를 만들 수 있다. + (루트 리듀서 안의 작은 리듀서들은 서브 리듀서라고 부릅니다.)


# 4. Store (스토어)
>리덕스에서는 한 애플리케이션당 하나의 store를 만들게 된다. store 안에는, 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있다.

# 5. Dispatch (디스패치)
> 스토어의 내장함수 중 하나다. dispatch는 액션을 발생 시키는 함수이다. `dispatch` 라는 함수에는 액션을 파라미터로 전달한다. -> `dispatch(action)`.

# 6. Subscribe (구독)
> 스토어의 내장함수 중 하나다. `subscribe` 함수는, 함수 형태의 값을 파라미터로 받아온다. `subscribe `함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출된다.

### + 추가
> 리액트에서 리덕스를 사용하게 될 때 보통 이 함수를 직접 사용하는 일은 별로 없다. 그 대신에 react-redux 라는 라이브러리에서 제공하는 `connect` 함수 또는 `useSelector` Hook 을 사용하여 리덕스 스토어의 상태에 구독합니다.