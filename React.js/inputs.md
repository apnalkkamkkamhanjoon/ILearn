# 여러개의 input

## InputSample.js
input에서 만든 InputSample.js에서 새로운 input태그를 생성합니다. 이번에는 input 이 비어져있을 때 인풋에 대한 설명을 보여주는 placeholder 값도 설정해보겠습니다.

기존에 만들었던 상태는 지우고, onChange 와 onReset 함수는 비웁니다.

```js
function InputSample() {
  const onChange = (e) => {
  };

  const onReset = () => {
  };


  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
  );
}
```

input의 개수가 여러개일때는 단순히 `useState`를 여러번 사용하고 `onChange`도 여러개 만들어서 구현 할 수 있습니다. 하지만 더 좋은 방법은  `input` 에 `name` 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다. 그리고, `useState` 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.

코드를 수정
```js
function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
```

## 리액트 상태에서 객채를 수정할때 

```js
input[names] = value;  <- 잘못된 방식
```
```js
setInputs({
    ...inputs,
    [name] : value <- 옳은 방식
})
```
이러한 방식을 "불변성을 지킨다"라고 합니다. 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행됩니다.만약에 `inputs[name] = value` 이런식으로 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않습니다.


### 결과리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야합니다.