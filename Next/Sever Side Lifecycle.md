# server side lifeCycle

> 1. nextJs서버가 `GET`요청을 받는다.
> 2. `GET`요청에 맞는 `page/Component`를 찾는다.
> 3. `_app.tsx`의 `getInitialProps`가 있다면 실행한다.
> 4. route에 맞는 페이지의 `Component`의 `getInitialProps`가 있다면 실행한다. `pageProps`들을 받아온다.
> 5. `_document.tsx`의 `getInitialProps`가 있다면 실행한다. `pageProps`들을 받아온다.
> 6. 모든 props들을 구성하고, `_app.tsx` -> `page Component` 순서로 렌더링한다.
> 7. 모든 Content를 구성하고 `_document.tsx`를 실행하여 html 형태로 출력한다.
