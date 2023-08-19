# Cookie

> 쿠키란 클라이언트가 어떠한 웹 사이트를 방문할 경우, 그 사이트가 사용하고 있는 서버를 통해 클라이언트의 브라우저에 설치되는 작은 기록 정보 파일이다.

```
MockHttpServeletRes:
    status = 200
    Headers = [Set-Cookie:"userName=Hanjoon", "password=qwe123"]
```

- 서버는 클라이언트의 로그인 요청에 대한 응답을 작성할 때, 클라이언트 측에 저장하고 싶은 정보를 응답 해더의 `Set-Cookie`에 담는다.
  - 쿠키는 Key-Value 형식의 문자열이다.

```
MockHttpsServerletReq:
    HTTP Method = GET
    Request URI = /user/my/edit
        Headers = [Cookie:"userName=Hanjoon", "password=qwe123"]
```

- 이후 해당 클라이언트는 요청을 보낼 떄 마다, 매번 저장된 쿠키를 요청 헤더의 `Cookie`에 담아 보낸다.
- 서버는 쿠키에 담긴 정보를 바탕으로 해당 요청의 클라이언트가 누군지 식별할 수 있다.

## 단점

- 보안에 취약하다
  - 요청 시 쿠키의 값을 그대로 보낸다.
  - 유출 및 조작 당할 위험이 존재한다.
- 쿠키에는 용량 제한이 있어 많은 정보를 담을 수 없다.
- 웹 브라우저마다 쿠키에 대한 지원 형태가 다르기 때문에 브라우저간 공유가 불가능하다.
- 쿠키의 사이즈가 커질수록 네트워크의 부하가 심하다.
