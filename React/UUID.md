# UUID

> Universally Unique IDentifier 범용 고유 식별자의 약자이다. 컴포넌트에 고유한 key를 요구하는 React에서 유용하게 사용할 수 있다.
> `react-uuid` 모듈을 이용해 UUID를 생성하는 함수를 제공한다.

## 예제
map을 예시로 들었다.
```js
import uuid from "react-uuid";

function Sample({array}) {
  return (
      {array.map((item)=>(
        <div key={uuid()}>{item}</div>
      ))}
  );
}
```
