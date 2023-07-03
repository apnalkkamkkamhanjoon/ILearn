# Reducer vs ExtraReducer

> `Redux Toolkit`에서 사용되는 `reducer`와 `extraReducer`의 차이

## reducer

> 액션함수를 생성함과 동시에 해당 액션함수에 대응하는 역할을 한다.

## extraReducer

> 이용자가 `slice reducer` 내에서 액션함수에 접근할 수 있게하지만, `extraReducers` 내에서 액션함수를 생성하지 않는다는 점이 기존의 `reducers`와 가장 큰 차이점이다.

## extraReducer 사용

**언제 사용하냐?**

> 이미 다른 곳에서 정의된 액션생성함수를 사용할때인데, 가장 흔한 케이스는 비동기를 위해 `createAsyncThunk` 를 사용하여 정의된 액션함수를 사용하거나, 다른 slice 에서 정의된 액션함수를 사용하는 경우이다.

### 결론

> slice reducer 에 맵핑된 내부 액션함수가 아닌, 외부의 액션을 참조하기 위해 사용된다.
