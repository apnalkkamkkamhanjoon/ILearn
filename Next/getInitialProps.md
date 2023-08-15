# getInitalProps

> SSR을 하는 next에서 컴포넌트는 각 페이지마다 사전에 불러와야할 데이터가 있다. react, vue같은 Client Side Rendering (CSR)의 경우는 useEffect, created 함수를 이용하여 data fetching을 한다. 서버사이드에서 실행하는 next에서는 getInitialProps를 이용하여 data fetching 작업을 한다.
>
> next v9 이상에서는 `getInitialProps`대신 `getStaticProps`, `getStaticPaths`, `getServerSideProps`를 사용하도록 가이드한다.

## getStaticProps

```
Fetch data at build time, pre-render for Static Generation
getStaticPaths only runs at build time on server-side.
```

빌드시 고정되는 값, 빌드 이후 값 변경이 불가능하다.

```js
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
```

> docs의 예제에서는 fetch를 통해 게시물을 가져오고 그 게시물의 title을 보여준다.

## getStaticPatch

- 빌드 타임 때, 정적으로 렌더링할 경로 설정
- 이곳에 정의하지 않은 하위 경로는 접근해도 페이지가 안뜬다.
  - 동적 라우팅 : 라우팅 되는 경우의 수 따져서 하위로 넣는다.

`/pages/dyna/[dynamic].js` : /dyna/동적인값

```js
// This function gets called at build time
export async function getStaticPaths() {
  return {
    //빌드 타임 때 아래 정의한  /dyna/1,  /dyna/2, ... /dyna/동적인값 경로만 pre렌더링.
    paths: [
      { params: { dynamic: 1 } },
      { params: { dynmic: 2 } }
      ......
      { params: { dynmic: 동적인값 } }
    ],
    // 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 지 여부.
    fallback: true,
  }
}
```

## getServerSideProps

```
Fetch data on each request. pre-render for Server-side Rendering
```

```js
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Page;
```

> 각 요청에 따라 서버로부터 데이터를 가져온다.

## 언제 사용

> getServerSideProps는 데이터 요청시 인출해야하는 페이지를 미리 렌더링해야하는 경우에만. TTFB(Time to First byte)는 getStaticProps서버가 모든 요청에 대해 결과를 계산해야하고 추가 구성 없이는 결과를 CDN에 의해 캐시 할 수 없기 떄문에 더 느리다.
>
> 데이터를 미리 렌더링 할 필요가 없는 경우 클라이언트 측에서 데이터를 가져 오는 것을 고려해야한다.

## SWR

> next에서 만든 SWR을 사용하여 client side에서 데이터 패치를 한다.

```js
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

> seo 필요한 페이지면 getServerSideProps를 쓰고 비공개 페이지일 경우는 클라이언트 측에서 가져온다.(getServerSideProps를 남발하면 서버가 모든 요청을 계산하고, 값 캐쉬가 힘들기에 비효율적이다.)
