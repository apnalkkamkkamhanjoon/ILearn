# Mock

> 가짜 데이터, 샘플 데이터, 실제 API 에서 받아온 데이터가 아닌 프론트앤드 개발자가 필요에 의해 샘플로 만들어본 데이터이다.

## msw 설치

```
yarn add msw --dev
npx msw init public --save
```

## msw mock api 만들기

```js
import { rest, setupWorker } from "msw";
const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    // error handling example
    const errorCode = req.url.searchParams.get("error_code");
    if (errorCode) {
      return res(ctx.status(errorCode));
    }
    return res(
      ctx.status(200), // rest api status code
      ctx.delay(1000), // api delay time
      ctx.json({
        items: [{ name: "product-1" }, { name: "product-2" }],
      })
    );
  }),
];
export default handlers;
// setting msw
export const worker = setupWorker(...handlers);
```

## msw init setting

> 프로젝트의 가장 메인(react는 index.js vue는 main.js)에 디벨롭 환경일때만 사용한다고 정의한다.

```ts
// index.js
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./lib/api/mswApi");
  worker.start();
}
```

## msw 사용하기

> 사용하고자 하는 컴포넌트에서 아래와 같이 api 호출을 하면된다.

```ts
const getMockData = async () => {
  const res = await fetch("/api/products");
  console.log(await res.json());
};
```
