# Component
> React에서 UI를 구성하기 위한 핵심 요소 중 하나다. Component는 재사용 가능한 코드 블록으로, React 애플리케이션의 UI를 작성하는 데 사용된다.

## 함수형 컴포넌트
일반적인 함수 선언 방식이 있고 arrow function선언 방식이 있다.

> 1. 클래스형 컴포넌트보다 선언하기 편하고 메모리 자원을 더 사용한다.
> 2. React Hooks로 state 및 라이프사이클 API 등을 사용할 수 있다.

```js
function Component(){
  return(
    ...
  );
}

export default Component;
```
```js
const Component = () => {
  return(
    ...
  );
}

export default Component;
```

## 클래스형 컴포넌트
> state기능 및 라이프 사이클 기능을 사용할 수 있고 임의 메서드를 정의할 수 있다.
> render() 함수가 꼭 있어야하고 그 안에서 return()으로 JSX문법을 반환해야한다.

```js
import { Component } from "react";
class ClassComponent extends Component {
  render(
    return(
      ...
    );
  )
}

export default ClassComponent;
```

## 구성요소
props
> 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터이다. props값은
자식 컴포넌트에서 수정이 불가하고 부모 컴포넌트에서만 수정이 가능하다.

state
> 컴포넌트의 상태를 저장하고 수정 가능한 데이터이다.

context
> 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터이다. 주로 컴포넌트가 아주 많은데 전달하는 props는 같을 때 사용한다.