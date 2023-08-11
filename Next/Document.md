# \_document.tsx

> meta 태그를 정의하거나, 전체페이지에 관려하는 컴포넌트다.

```tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          // 모든페이지에 아래 메타테크가 head에 들어감 // 루트파일이기에 가능한
          적은 코드만 넣어야함 전역 파일을 엉망으로 만들면 안된다 // 웹 타이틀,
          ga 같은것 넣음
          <meta property="custom" content="123123" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
```

> 이곳에서의 console은 서버에서만 보이고 클라이언트에서는 안보인다.
>
> render 요소는 반영하지만 페이지 구성 요소만 반영되고 js는 반영 하지 않기 때문에 console은 보이지 않는다. 즉, componentDidMount 같은 훅도 실행되지 않는다. static한 상황에서만 사용한다.
