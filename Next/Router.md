# next/router

> `react`의 `react-router-dom`과 거의 유사하다.
>
> `link`에 있는 prefetching기능도 사용 가능하다.

```tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import posts from "../posts.json";

export default () => {
  const router = useRouter();

  const post = posts[router.query.id as string];
  if (!post) return <p>noting</p>;

  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <h1>{post.title}</h1>
      <h1>{post.content}</h1>
      <button onClick={() => router.push("test")}>go to Test</button>
    </>
  );
};
```
