# Life Cycle

> 라이프 사이클은 Mount(마운트), UnMount(언마운트), Update(업데이트)로 나뉜다

## Mount

> DOM이 생성되고 웹 브라우저에 나타나는 것

### 메서드

`constructor`

- 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드.

`getDerivedStateFromProps`

- props에 있는 값을 state에 넣을 때 사용하는 메서드

`render`

- 내가 준비한 UI를 렌더링하는 메서드

`componentDidMount`

- 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

## UnMount

> Mount의 반대, 컴포넌트에서 DOM을 제거 하는 것

### 메서드

`componentWillUnmount`

- 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

`render()`

- 컴포넌트의 모양새를 정의한다.
- 안에서 this.props와 this.state에 접근할 수 있고 리액트 요소를 반환한다.
- 요소는 태그가 될 수도있고 컴포넌트가 될 수도 있다.
- 이벤트 설정이 아닌곳에는 setState를 사용하면 안되고 브라우저의 DOM에도 접근해서는 안 된다.
- DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 한다.`

`constructo(props) {...}`

- 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행된다.
- 초기 state를 정의할 수 있다

`getDerivedStateFromProps()`
- 리액트 v16.3 이후에 새로 만든 라이프사이클 메서드이다.
- props로 받아온 값을 state에 동기화시키는 용도로 사용하고 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.

`componentDidMount() {...}`

- 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행한다.
- 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록,
  stTimeout, setInterval, 네트워크 요청같은 비동기 작업을 처리한다
