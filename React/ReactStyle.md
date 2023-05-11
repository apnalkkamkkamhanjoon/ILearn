# Style
> React의 스타일 기법

## Inline styling
우선순위가 제일 높다

App.js
```js
function App() {
    return (
        <div>
            <h1
                style={{
                    color:'red',
                    // Kebab case가 아닌 Camel case 표기법으로 작성해야 됨
                    textAlign: "center"
                }}
            >Hello React!!</h1>
        </div>
    );
}

export default App;
```

## Css Import
클래스명 충돌 방지

App.js
```js
import "./style.css";

function App() {
    return (
        <div>
            <h1 className="hello">Hello React!!</h1>
        </div>
    );
}
```

style.css
```css
.hello {
  color: red;
}
```

## SCSS
코드의 가독성을 높여 유지보수를 쉽게 한다

### How to Install
```bash
npm i node-sass
yarn add node-sass
```

App.js
```js
import "./style.scss";

function App() {
    return (
        <div className="warp">
            <h1 className="hello">Hello React!!</h1>
            <h2 className="useScss">SCSS 사용해보기</h2>
        </div>
    );
}

export default App;
```

style.scss
```scss
.warp{
    width: 100%;
    height: 100vh;
    
    .hello {
        color: red;
    }

    .useScss{
        color: blue;
        &:hover {
            cursor: pointer;
        }
    }
}
```

## Styled-Component
JS 안에 CSS 를 작성하는 것을 말한다. style을 적용하고자 하는 태그나 컴포넌트를 styled-components로 감싸면 style이 적용된다.

### How to Install
```bash
npm i styled-components
yarn add styled-components
```

App.js
```js
import styled from 'styled-components';

// 백틱으로 감싸줘야 함
const StyleBox = styled.div`
    color: red;
`;

function App() {
    return (
        <div>
            <StyleBox>
                <h1 className={style.hello}>Hello React!!</h1>
            </StyleBox>
        </div>
    );
}

export default App;
```
### 주의
> styled-components를 함수 컴포넌트 안에 선언하면 에러난다.
