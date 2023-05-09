# useNavigate
> Link 컴포넌트를 사용하지 않고 페이지를 이동해야 할 때 사용하는 React Hooks이다.

```js
import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
    const navigate = useNavigate();

    const goBack = () => {
        // parameter가 숫자타입이라면 그 숫자만큼 페이지가 뒤로가거나 앞으로 이동한다.
        navigate(-1);
    };

    const goArticles = () => {
        // 해당 주소로 이동할 때 현재 페이지를 기록에 남기지 않는다.
        navigate('/articles', { replace: true });
    };

    return (
        <div>
            <header style={{
                background: "lightgray", padding: 16, fontSize: 24,
                display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
                <h1>Header</h1>
                <div>
                    <button onClick={goBack}>뒤로가기</button>
                    <button onClick={goArticles}>게시글 목록</button>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
```