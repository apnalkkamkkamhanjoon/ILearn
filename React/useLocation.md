# useLocation
>location 객체를 반환하는 Hooks이다. 사용자가 현재 보고있는 페이지의 정보를 담고있다.

## 속성
`pathname`
>현재 주소의 경로 (쿼리스트링 제외)

`search`
>맨 앞의 ? 문자를 포함한 쿼리스트링 값

`hash`
>주소의 # 문자열 뒤의 값

`state`
>페이지로 이동할 때 임의로 넣을 수 있는 상태 값

`key`
>location 객체의 고유값, 초기에는 default이며 페이지가 변경될 때마다
고유의 값이 생성 됨

## 예시
```js

import React from 'react';
import { useLocation } from "react-router-dom";

function About() {
    // 주소: http://localhost:3000/about?detail=true&mode=1
    const location = useLocation();
    console.log(location.search);
    return (
        <div>
            <h2>쿼리스트링: {location.search}</h2>
            // location.search의 값: ?detail=true&mode=1
        </div>
    );
}
export default About;
```