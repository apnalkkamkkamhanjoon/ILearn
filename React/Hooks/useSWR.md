# useSWR

> 데이터를 가져오기 위한 React Hooks이다. "SWR"이라는 이름은 HTTP RFC 5861(opens in a new tab)에 의해 알려진 HTTP 캐시 무효 전략인 stale-while-revalidate에서 유래됬다. SWR은 먼저 캐시(stale)로부터 데이터를 반환한 후, fetch 요청(revalidate)을 하고, 최종적으로 최신화된 데이터를 가져오는 전략입니다.

> SWR을 사용하면 컴포넌트는 지속적이며 자동으로 데이터 업데이트 스트림을 받게 됩니다.
> 그리고 UI는 항상 빠르고 반응적입니다.

## 예시

```js
import useSWR from "swr";

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

`useSWR`은 `key` 문자열과 `fetcher` 함수를 받는다. `key`는 데이터의 고유한 식별자이며 `fetcher`로 전달될 것이다. `fetcher`는 데이터를 반환하는 어떠한 비동기 함수도 될 수 있다.

hook은 세 개의 값을 반환한다. 요청의 상태에 기반한 data, isLoading 그리고 error.

## 기능

> 단 한 줄의 코드로 프로젝트 내의 데이터 가져오기 로직을 단순화할 수 있으며, 밑의 기능들을 바로 사용할 수도 있다.

- 빠르고, 가볍고, 재사용 가능한 데이터 가져오기
- 내장된 캐시 및 요청 중복 제거
- 실시간 경험
- 전송 및 프로토콜에 구애 받지 않음
- SSR / ISR / SSG 지원
- Typescript 지원
- React Native
