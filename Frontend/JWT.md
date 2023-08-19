# JWT

> JWT (Json Web Token)의 약자
>
> 웹 표준을 따르고 있으며, JSON 객체를 사용하여 정보를 전달한다. 필요한 모든 정보를 한 객체에 담아서 전달하기 떄문에 JWT 한 가지로 인증을 마칠 수 있다.

## 구조

HEADER.PAYLOAD.SIGNATURE  
헤더 내용 서명

> 위와 같이 헤더, 내용, 서명이 '.(dot)'을 구분으로 하여 JWT토큰 1개를 이룬다.
> ex)
> `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
