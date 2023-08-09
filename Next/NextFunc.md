# Next.js의 주요 기능

## Hot Loading

> 개발 중 저장되는 코드는 자동으로 새로고침 된다.

## Automatic routing

> pages 폴더에 있는 파일은 해당 이름으로 라우팅 된다.  
>  ex) (pages/page1.tsx -> localhost:3000/page1)
>
> public 폴더도 pages의 폴더와 동일하게 라우팅 할 수 있다. 그러나 모든 사람이 페이지에 접근할 수 있으므로 지양해야한다.

## single file components

> `style jsx`를 사용함으로써 컴포넌트 내부에 해당 컴포넌트만 스코프를 가지는 css를 만들 수 있다.

- `style jsx global`을 사용하면 글로벌로 스타일 정의가 가능하다.

style.jsx

```jsx
function Heading(props) {
  const variable = "red";
  return (
    <div className="title">
      <h1>{props.heading}</h1>
      <style jsx>
        {`
          h1 {
            color: ${variable};
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      // red
      <Heading heading="heading" />
      // block
      <h1>ttt</h1>
    </div>
  );
}
```

## 글로벌 스타일 정의 가능하다.

> `_app.tsx`에만 정의 가능하다. 다른 컴포넌트에 정의한 경우 다른 클래스와 겹쳐 오류를 발생할 수 있음으로 `_app`에서만 허용 가능하다.

> 다른 컴포넌트에 정의시 아래와 같은 오류가 난다.  
> `Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages/_app.tsx. Or convert the import to Component-Level CSS (CSS Modules).`

\_app.tsx

```tsx
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return <Component ponent {...pageProps} />;
}

export default MyApp;
```

## serverlanding

> 서버렌더링을 한다. 클라이언트 렌더링과 다르게 서버렌더링을 한 페이지의 소스보기를 클릭하면 내부에 소스가 있다.

## code splitting

> dynamic import를 이용하면 손쉽게 코드 스플리팅이 가능하다.
>
> 코드 스플리팅은 내가 원하는 페이지에서 원하는 자바스크립트와 라이브러리를 렌더링하는 것이다. 모든 번들(chunk.js)가 하나로 묶이지 않고, 각각 나뉘어 좀 더 효율적으로 자바스크립트 로딩시간을 줄일 수 있다.
