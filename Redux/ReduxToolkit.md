# Redux Toolkit

> Redux Toolkit은 Redux를 더 사용하기 쉽게 만들기 위해 Redux에서 공식 제공하는 개발도구다. Redux Toolkit은 Redux의 문제점을 보완하기 위해 등장했다.

## Redux의 문제점

- 저장소 구성의 복잡성
- 많은 패키지 필요성
- 작업시 수 많은 코드양

++

> 리덕스를 라이브러리 없이 사용 시 1개의 액션을 생성해도 액션타입 정의 -> 액션함수 생성 -> 리듀서 정의 의 작업이 필요하다.많아지는 액션을 관리하기 위해 redux-actions을, 불변성 보존을 위한 immer, store값을 효율적으로 핸들링하여 불필요한 리렌더링을 막기 위해 reselect, 비동기 작업을 위한 thunk 와 saga 등 리덕스의 유효한 기능을 사용하기 위해 4~5개의 라이브러리를 사용해야 했다.하지만 Redux Toolkit은 내장된 기능으로 saga를 제외한 위의 모든 기능을 제공한다. - 출처 'https://velog.io/@djaxornwkd12/Redux-Toolkit-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0'

## 특징

> - Simple: 스토어 설정, 리듀서 생성, 불변성 업데이트 로직 사용을 편리하게 하는 기능 포함
> - Opitionated: 스토어 설정에 관한 기본 설정 제공, 일반적으로 사용되는 redux addon이 내장
> - Powerful : Immer에 영감을 받아 '변경'로직으로 '불변성'로직 작성 가능, state 전체를 slice로 자동으로 만들 수 있음
> - Effective : 적은 코드에 많은 작업을 수행 가능
>   출처 '리덕스 홈페이지'

이를 위해 `immer produce`,`reselect`, `ducks pattern`, `Redux Devtools`, `FSA 규약`, `typescript`, `미들웨어(thunk 한정)` 등을 지원하고 있다.
