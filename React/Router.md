# Router

- 리액트에서 페이지 이동을 할 수 있게 해주는 기능이다.(주소에 따라)

- React Router v6에서는 v5의 Switch기능을 Routes가 해준다.

# Use

`npm install react-router-dom`

예시

```js
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

## Link

> 리액트에서 페이지 이동을 하고싶다면 a 태그가 아닌 Link 컴포넌트를 사용한다.
> a 태그는 페이지를 이동시키면서 페이지를 새로고침한다.
> 그러면 원래 리액트 앱의 상태들이 초기화되고 새로 렌더링을 하게 된다.
> 반면 Link 컴포넌트는 브라우저의 주소만 바꾸고 페이지가 새로고침 되지 않는다.

App.js

```js
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

Home.js

```js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <h2>가장 먼저 보여지는 페이지입니다.</h2>
      <li>
        <Link to="/about">소개 사이트</Link>
      </li>
    </div>
  );
}

export default Home;
```

## Outlet

> Route의 chidren으로 들어가는 JSX element를 보여주는 역할을 한다.

App.js

```js
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profiles from "./components/Profiles";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profiles />} />
      <Route path="/articles" element={<Articles />}>
        {/* Route children */}
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
```

Articles.js

```js
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Articles() {
  return (
    <div>
      {/*Article 컴포넌트의 JSX사용*/}
      <h1>
        <Outlet />
      </h1>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Articles;
```

## NavLink
> - 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우
특정 스타일을 적용하는 컴포넌트이다.
> - 이 컴포넌트는 style과 className은 { isActive: boolean }을 파라미터로 전달받는 함수타입의 값을 전달한다.

```js
<NavLink
  style={({isActive}) => isActive ? activeStyle : undefined}
/>

<NavLink
  className={({isActive}) => isActive ? 'active' : undefined}
/>
```

예제
```js
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function Articles() {
    return (
        <div>
            <h1><Outlet /></h1>
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
}

function ArticleItem({ id }) {

    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                게시물 {id}
            </NavLink>
        </li>
    )
}

export default Articles;
```