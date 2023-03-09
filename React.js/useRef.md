# useRef로 특정 DOM 선택하기

## useRef의 정의
JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택합니다.<br/>리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다. 그럴 때 리엑트네서 `ref`라는 것을 사용합니다.<br/>(함수형 컴포넌트에서 ref 를 사용 할 때에는 `useRef` 라는 Hook 함수를 사용합니다.)

## 예제
초기화 버튼을 눌렀을 때 input에 포커스가 잡히도록 `useRef`를 사용하겠습니다.
```js
inputSample.js
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```
`useRef()` 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 `ref` 값으로 설정해주어야 합니다. Ref 객체의 `.current` 값은 우리가 원하는 DOM 을 가르키게 됩니다.

위 예제에서는 onReset 함수에서 input 에 포커스를 하는 focus() DOM API 를 호출했습니다.