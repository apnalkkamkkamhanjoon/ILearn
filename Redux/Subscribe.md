# Subscribe (구독)

> 스토어의 내장함수 중 하나다. `subscribe` 함수는, 함수 형태의 값을 파라미터로 받아온다. `subscribe `함수안에 특정 함수(리스너 함수)를 파라미터로 넣어서 호출해 주면, 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출된다.
> 

```js
const listener = () =>{
    console.log('상태가 업데이트됨');
}
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화 할 때 함수를 호출
```