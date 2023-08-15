# OAuth?

> OAuth는 인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 공통적인 수단으로서 사용되는, 접근 위임을 위한 개방형 표준이다.

## OAuth 구성 요소

- Resource Owner
  > 웹 서비스를 이용하려는 유저, 자원(개인정보)를 소유하려는 자, 사용자
- Client
  > 자사 또는 개인이 만든 애플리케이션 서버
- Authorization Server
  > 권한을 부여(인증에 사용할 아이템을 제공해주는)해주는 서버다.
- Resource Server
  > 사용자의 개인정보를 가지고있는 애플리케이션 (Google, Facebook, Kakao 등) 회사 서버
- Access Token
  > 자원에 대한 접근 권한을 Resource Owner가 인가하였음을 나타내는 자격증명
- Refresh Token
  > Client는 Authorization Server로 부터 access token(비교적 짧은 만료기간을 가짐) 과 refresh token(비교적 긴 만료기간을 가짐)을 함께 부여 받는다.
