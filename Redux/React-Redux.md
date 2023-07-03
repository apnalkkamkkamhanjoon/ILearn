# React-Redux 사용하기

## 왜 사용하지?
> 상태 업데이트에 관한 로직을 모듈로 따로 분리하여 컴포넌트 파일과 별개로 관리할 수 있으므로 코드를 유지보수하는데 도움이 되서, 또한 여러 컴포넌트에서 동일한 상태를 공유해야 할 때 매우 유용하며, 실제 업데이트가 필요한 컴포넌트만 리렌더링 되도록 쉽게 최적화해 줄 수도 있다.

## 사용하는것
> 리액트에서 리덕스를 사용할 때 store인스턴스를 직접 사용하기 보다는 주로 react-redux라는 라이브러리에서 제공하는 유틸 함수(connect)와 컴포넌트(Provider)를 사용하여 리덕스 관련 작업을 처리한다.

## 준비하기

1. 새 프로젝트 생성

```bash
$ npx create-react-app react-redux-tutorial
or
$ yarn create react-app react-redux-tutorial
```

2. redux 라이브러리 설치

```bash
$ cd react-redux-tutorial
$ yarn add redux
    or
$ npm install redux
```

- 추가(Prettier)
  .prettierrc

```.prettierrc
{
    "singleQuote":true,
    "semi":true,
    "useTabs":false,
    "tabWidth":2,
    "trailingComma":"all",
    "printWidth":80
}
```
