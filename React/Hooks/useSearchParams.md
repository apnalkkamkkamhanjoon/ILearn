# useSearchParams

> 쿼리스트링을 더욱 쉽게 다루게해주는 React Hooks이다.

## 특징

- 첫번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환,
  get 메서드를 통하여 쿼리파라미터를 조회할 수 있고 set 메서드를 통하여 특정 쿼리파라미터를
  업데이트 할 수 있다.
- 두번째 원소는 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수를 반환한다.

## 예제
```js
    
import React from 'react';
import { useLocation, useSearchParams } from "react-router-dom";

function About() {
    // 주소: http://localhost:3000/about?detail=true3&mode=1
    const [searchParams, setSerchParams] = useSearchParams();
    console.log(searchParams);

    // 쿼리파라미터 조회
    const detail=searchParams.get("detail");
    const mode=searchParams.get("mode");
   
    const onToggleDetail = () => {
        // detail boolean 상태변환
        setSerchParams({ mode, detail: detail === "true" ? false : true} );
    };

    const onIncreaseMode = () => {
        // mode 값 증가
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSerchParams({ mode: nextMode, detail });
    };

    return (
        <div>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>IncreaseMode</button>
        </div>
    );
}

export default About;
```