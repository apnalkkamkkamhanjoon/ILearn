# REST

> Representational State Transfer의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 의미한다.


## 구성요소
1. 자원 : HTTP URL
2. 자원에 대한 행위 : HTTP Method
3. 자원에 대한 행위의 내용 : HTTP Message Pay Load

## 정의

- HTTP URI을 통해 자원을 명시한다.
- HTTP Method(POST, GET, PUT, DELETE, PATCH)를 통해 해당 자원에 대한 CRUD Operation을 적용한다.

## 특징

1. Server-Client (서버-클라이언트 구조)
2. Stateless (무상태)
3. Cacheable (캐시 처리 가능)
4. Layered System (계층화)
5. Uniform Interface (인터페이스 일관성)

## 장점

1. HTTP 프로토콜의 인프라를 그대로 사용하기 때문에 REST API사용을 위한 별도의 인프라를 구축할 필요가 없다.
2. HTTP 프로토콜의 표준을 최대한 활용하여 추가적인 장점을 함께 가져갈 수 있게 해 준다.
3. HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다.
4. Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.
5. REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있다.
6. 여러가지 서비스 디자인에서 생길 수 있는 문제를 최소화한다.
7. 서버와 클라이언트의 역할을 명확하게 분리한다.

## 단점

1. 표준 자체가 정해지지 않아 정의가 필요하다.
2. HTTP Method 형태가 제한적이다.
3. 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header정보의 값을 처리해야하므로  
전문성이 요구될 수 있다.
4. 구형 브라우저에서 호환이 되지 않아 지원해주지 못하는 동작이 많다. ex) Explorer
