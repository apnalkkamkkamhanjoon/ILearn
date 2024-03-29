# Redux의 규칙
> 리덕스에서 꼭 지켜야 할 3가지 규칙

## 1. 하나의 애플리케이션 안에는 하나의 스토어가 있다.
> - 필수는 아니지만 상태관리가 복잡해질 수 있으므로 권장하지 않는다.
> - 개발 도구를 활용하지 못하게 된다.

## 2. 상태는 읽기전용 이다.
> - 기존의 상태를 수정하지 않고 새로운 상태를 생성하여 업데이트한다. (스프레드 연산자 사용, 교체의 개념)
> - 불변성을 유지할 수 있다. → 데이터의 변경을 감지하기 위해서는 내부 데이터까지 전부 찾아봐야 하는데 이 경우 시간이 너무 오래 걸린다. → 따라서 기존 상태의 객체를 새로운 객체로 변경하면 객체의 주소가 다르므로 변경을 쉽게 감지하는것이 가능하다.

## 3. 리듀서는 순수한 함수여야 한다.
> - 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받는다.
> - 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환한다.
> - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야만 합니다.

하지만 위와 같지 않은 경우(네트워크 요청과 같은 비동기 작업) `리덕스 미들웨어`라는 것을 사용한다.