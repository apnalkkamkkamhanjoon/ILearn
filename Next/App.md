# \_app.tsx

```tsx
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

- 이곳에서 렌더링하는 값은 모든 페이지에 영향을 준다.
- 최초로 실행되는 것은 `_app.tsx`이다.
- `_app.tsx`는 클라이언트에서 띄우길 바라는 전체 컴포넌트 -> 공통 레이아웃이므로 최초 실행되며 내부의 컴포넌트들을 실행한다.
- 내부에 컴포넌트가 있다면 전부 실행하고 html의 body로 구성한다.
- Component에서 pageProps를 받는다.
  - 여기서 props로 받은 Component는 요청한 페이지다. GET `/` 요청을 보냈다면, Componenet에는 `/page/index.js` 파일이 props로 내려오게 된다.
  - pageProps는 페이지 getInitialProps를 통해 내려 받은 props들을 말한다.
- 그 다음 `_document.tsx`가 실행된다.
- 페이지를 업데이트 하기 전에 원하는 방식으로 페이지를 업데이트 하는 통로이다.
- `_app.tsx`에서 console.log 실행시 client, server 둘다 콘솔 찍힌다.
