# Axios

> 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

## 특징

- 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용한다.
- Promise(ES6) API를 사용한다.
- 요청과 응답 데이터의 변형이 가능하다.
- HTTP 요청과 응답을 JSON 형태로 자동 변경해준다.

## 사용

### 다운로드

```jsx
npm install axios

yarn add axios

import axios from 'axios'
```

### GET

- 입력한 url에 응답을 받아온다.
- 서버에서 어떤 데이터를 가져와서 보여준다거나 하는 용도다.

```jsx
axios.get(urll, body, [, config]);
```

### POST

- 새로운 리소스를 생성할 때 사용한다.
- 로그인, 회원가입 등 사용자가 생성한 파일을 서버에다가 업로드할때 사용한다.

```jsx
axios.post(url, { data }, [, config]);
```

### DELETE

- REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용한다.
- 서버에 있는 데이터베이스의 내용을 삭제하는 것을 주 목적으로 두어 두 번째 인자를 전달하지 않는다.

```jsx
axios.delete(url, [, config]);
```

### PUT

- REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 갱신하는 목적으로 사용된다.
- 서버에 있는 데이터베이스의 내용을 변경하는 것을 주 목적으로 한다.

간단한 예제

```js
axios({
  method: "POST",
  url: URL,
  data: {
    email: email,
    password: password,
  },
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

```js
axios
  .post(URL, {
    email: email,
    password: password,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```
