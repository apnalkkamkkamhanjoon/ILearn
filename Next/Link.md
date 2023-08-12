# Link

> 보통 페이지간 이동은 a 태그를 사용하나 next에서는 사용하지 않는다.
> 대신 Link를 사용해 페이지간 이동을 한다.

```ts
import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    // 동적 link시 [] 사용
    <Link href="/blog/[address]">
      <a>Blog</a>
    </Link>
  </div>
);
```
