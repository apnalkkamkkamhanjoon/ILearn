# State
__React에서 변하는 값__
> 함수형 컴포넌트에서는 useState라는 hooks를 사용해 class에서만 사용할 수 있던 state를 다룰 수 있다.

## useState
> state의 두번째 값은 첫번째 값을 설정한다
App.js
```js
import React, { useState } from "react";
function App(){

  const [cnt, setCnt]=useState(0);
  
  const add=()=>{
    setCnt(cnt+1);
  };
  
  const minus=()=>{
    setCnt(cnt-1);
  };
  
  return(
    <div>
      <h1>The Number is: { cnt }</h1>
      <button onClick={ add }>ADD</button>
      <button onClick={ minus }>MINUS</button>
    </div>
  )
}
export default App;
```

## useState를 왜 const로 선언하나?

### const
> 원래 JS에서는 변하지 않는 상수를 선언할 때 const를 쓰지만
React에서는 변하는 값인 state를 const로 선언한다.
시실 상수란 메모리를 참조하는 주소값이다. 그래서 주소를 변경시키는
할당은 error가 나는 것이고 주소를 변경시키지 않는
phsu, pop은 정상적으로 작동하는 것이다.

### state
> 함수안에서 변수의 수명이 다해도 이를 참조하는 변수가 있으면 생명주기가 끝나지 않는데
이것을 클로저라고한다. React에서는 이 역할을 useState의 두번째 인자인 setState가 클로저 역할을 한다.
렌더링이 이루어지면 setState가 변수값을 보관하고 있다가 새로운 값을 할당할 때 내부에서 새로운 const를 선엄함으로서
error가 나지 않는다.

### let???
> 우리가 말 안듣고 state를 setState로 안하고 직접 변경할까봐 let은 버려졌다...