# Children

> 태그와 태그 사이의 모든 내용을 표시하기 위한 특수한 props로 정의한다.

## 예제

> 생명주기 데이터를 변경하지 않고 props.children을 화면에 표시하는 예제이다.

```js
const Catgory = (props) => {
  return <ul>{props.children}</ul>;
};
```

children은 특수한 속성이므로 밑과 똑같이 작성할 수 있다.

```js
const Catgory = ({ children }) => {
  return <ul>{children}</ul>;
};
```

App.js

```js
const App = () => {
  <Category>
    <li>First item.</li>
    <li>Second item.</li>
    <li>Another item.</li>
  </Category>;
};
```

**동작 과정**

> App 컴포넌트에서 작성한 `<Category> ~ </Category>` 내부에 작성한 내용들이 Category 컴포넌트에게 props.children으로 전달됩니다.
>
> {props.children}은 `<Category> ~ </Category>` 내부에 작성된 내용들을 화면에 표시합니다.

## 필요성

> props.children은 주로 자식 컴포넌트 또는 html 엘리먼트가 어떻게 구성되어있는지 모르는데, 화면에 표시해야 하는 경우 사용합니다.

> 예를들어 `<Category> ~ </Category>` 안에 <li> 태그가 몇 개 작성될지 모르기 때문이다.

```js
const App = () => (
  <Category>
    {/* li 태그가 0개일 수도 있고 여러 개일 수도 있습니다. */}
    <li>First item.</li>
    <li>Second item.</li>
    <li>Another item.</li>
  </Category>
);
```

> props.children을 사용하지 않고 `<Category> ~ </Category>` 내부에 작성된 코드를 props을 통해 전달해야 하는 경우 다음과 같이 코드를 작성할 수 있습니다.

```js
const App = () => (
  <Category
    body={
      <React.Fragment>
        <li>First item.</li>
        <li>Second item.</li>
        <li>Another item.</li>
      </React.Fragment>
    }
  />
);

const Category = (prpos) => {
  return <ul>{props.body}</ul>;
};
```

> 위의 방식대로 하면 문제점이 있습니다.
>
> 첫째, props의 속성 이름을 무엇으로 할 것인지?
>
> 둘째, 여러 엘리먼트를 전달해야 하는 경우 `<React.Fragment>`로 감싸거나 `<div>`로 감싸야합니다.
>
> 셋째, `<li>` 태그를 동적으로 처리해야하는 경우가 존재할 수 있습니다.

> 하지만 props.children을 사용하면 별 문제가 없다.

```js
// 3. 동적인 데이터라도 {props.children}을 사용하여 화면에 표시합니다.
const li_Array = ["First item.", "Second item."];

// 1. props 속성의 이름을 고민할 필요가 없습니다.
const Category = (props) => {
  return <ul>{props.children}</ul>;
};

// 2. <React.Fragment>를 사용하지 않아도 됩니다.
const App = () => (
  <Category>
    {li_Array.map((value, idx) => (
      <li key={idx}>{value}</li>
    ))}
  </Category>
);
```

> 이렇게 props.children을 사용하면, 코드의 재사용성을 향상하며 JSX 요소를 좀 더 유연하고 밀접하게 다룰 수 있습니다.

## 메서드

> React는 props.children가 컴포넌트 내의 JSX 요소를 단순히 화면에 표시하는 기능 이외에도 다양하게 다룰 수 있는 메서드를 제공합니다.

## 자식과 자손

> props.children 사용시 주의할 사항으로는 태그와 태그 사이의 모든 요소들을 자식 취급하지는 않습니다.

> Category 컴포넌트의 자식 요소는 `<ul>` 엘리먼트입니다.

```js
const li_Array = ["First item.", "Second item."];

const App = () => (
  <Category>
    <ul>
      {li_Array.map((value, idx) => (
        <li key={idx}>{value}</li>
      ))}
    </ul>
  </Category>
);
```

> `<ul> ~ </ul>` 사이에 있는 `<li>` 엘리먼트는 `<Category>` 기준으로는 자손이며, `<ul>` 기준으로는 자식 엘리먼트입니다.

> React에서 자식의 개수를 반환하는 React.Children.count 함수를 사용하여 Category 컴포넌트의 자식의 개수를 확인해보면, 1개만 출력되는 것을 확인할 수 있습니다.

```js
class Category extends React.Component {
  render() {
    console.log("자식의 수 : " + React.Children.count(this.props.children));
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
```

**실행결과**  
`자식의 수 : 1`
