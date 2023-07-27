# Msw

> MSW(Mock Service Worker)는 서비스 워커(Service Worker)를 사용하여 네트워크 호출을 가로채는 API 모킹(mocking) 라이브러리다.  
> 가짜 데이터, 샘플 데이터, 실제 API 에서 받아온 데이터가 아닌 프론트앤드 개발자가 필요에 의해 샘플로 만들어본 데이터이다.

## msw 설치

```
yarn add msw --dev
npx msw init public --save
```

## msw mock api 만들기

handlers.js

```js
import { rest, setupWorker } from "msw";
const handlers = [
  rest.get("url", (req, res, ctx) => {
    // error handling
    const errorCode = req.url.searchParams.get("error_code");
    if (errorCode) {
      return res(ctx.status(errorCode));
    }
    return res(
      ctx.status(200), // rest api status code
      ctx.json({
        items: [{ name: "example-1" }, { name: "example-2" }],
      })
    );
  }),
];
export default handlers;
```

browser.js

```js
import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
```

## msw init setting

> 프로젝트의 가장 메인(react는 index.js vue는 main.js)에 디벨롭 환경일때만 사용한다고 정의한다.

index.js

```js
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
```

## msw 사용하기

> 사용하고자 하는 컴포넌트에서 아래와 같이 api 호출을 하면된다.

```js
const [data, setData] = useState(null);

const handleClick3 = () => {
  fetch("url")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setData(json);
    });
};
```
