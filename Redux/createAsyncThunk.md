# createAsyncThunk

> `createAsyncThunk` 는 `createAction` 의 `비동기` 버전을 위해 고안되었다. 액션 타입 문자열과 프로미스를 반환하는 콜백 함수를 인자로 받아서 주어진 액션 타입을 접두어로 사용하는 프로미스 생명 주기 기반의 액션 타입을 생성한다. +++++ 따로 미들웨어 설정을 할 필요 없이 redux tool kit에서 기본적으로 제공해준다.

## 사용법

Slice 만들기

- `createAsyncThunk`의 첫번째 파라미터는 `action`의 이름을 넣어주고 두번째 파라미터는 처리할 비동기 함수와 그 안에 리턴할 `payload`를 넣어준다.
- `extraReducers`에서는 `createAsyncThunk`로 `action`의 `peding`, `fulfilled`, `rejected` 상태에 대한 처리 결과를 넣을 수 있다.
- 비동기 함수가 `fulfilled` 되었을 때, `action`의 `payload`로 `state`를 변경해준다.

## 예제

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// slice 생성하기
// createAsyncThunk 생성하기
export const loadBucket = createAsyncThunk(
  // action 이름
  "load/Bucket",
  // 비동기 함수
  async () => {
    const res = await axios.get(URL);
    // action의 payload 리턴
    return res.data;
  }
);

const bucketSlice = createSlice({
  name: "bucket",
  initialState: { list: [] },
  reducers: {},
  // `extraReducer`에 비동기 함수의 `pending`, `fulfilled`, `rejected`를 처리할 내용을 넣어준다.
  extraReducers: {
    [loadBucket.pending]: (state, action) => {
      console.log("pending");
    },
    // `fullflled` 되었을 때, 서버에서 받아온 데이터를 `state`에 넣어줌!
    // 첫번째 파라미터는 `redux`의 `state`이고 두번째 파라미터는 `action`
    [loadBucket.fulfilled]: (state, action) => {
      state.list = action.payload;
      console.log("fulfilled");
    },
    [loadBucket.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export default bucketSlice.reducer;
```

## 실행

> createAsync로 만든 비동기 함수를 useDispatch로 실행시키면 된다.

```js
import { loadBucket } from "./redux/modules/bucketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const myComponent = () => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(loadBucket());
  }, []);
  return (
    <>
      {bucket_list.map((item, index) => (
        <div key={index}>{item.text}</div>
      ))}
    </>
  );
};

export default myComponent;
```
