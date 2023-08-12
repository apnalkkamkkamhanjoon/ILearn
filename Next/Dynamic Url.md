# 동적 url (Dynamic Route)

> 가변적으로 변하는 url에 대해 동적 url을 지원한다. `[]` 문법으로 동적 페이지를 생성하는 동적 url을 만들 수 있다.

page/[id]/tsx

```tsx
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <>
      <h1>post</h1>
      <p>postid: {router.query.id}</p>
    </>
  );
};
```

> 위처럼 작성하면 localhost:3000/123 으로 접속시 postid 가 123으로 나온다.
> ` pages/[값].tsx`` 왼쪽 페이지 구조의 값은  `router.query.값`과 동일하다.
