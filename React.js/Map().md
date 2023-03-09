# Map()

## 예제
user라는 배열을 하나 만듭니다.
```js
const users = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com'
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com'
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com'
  }
];
```
위 배열을 컴포넌트로 랜더링 할려면 그냥 그대로 코드를 작성하는 방법이 있습니다.
```js
function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div>
    </div>
  );
}
```

코드를 간결하게 하기 위해 컴포넌트를 만들겠습니다

(한 파일에 여러개의 컴포넌트를 만들어도 됩니다.)
```js
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}
```

## map()의 정의

위와 같이 배열이 고정된 값이라면 저렇게 사용해도 괜찮지만 배열의 인덱스를 하나하나 조회해가면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못합니다.

동적인 배열을 조회할때에는 자바스크립트의 내장함수 `map()`을 사용합니다.

`map()`함수는 배열안에 있는 각 원소를 반환하여 새로운 배열을 만듭니다. 

리액트에서 동적인 배열을 렌더링해야 할 때는 이 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환하면 됩니다.
```js
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}
```

## key

하지만 콘솔을 열어본다면 에러가 하나 날것입니다.
`key`를 추가하라는 에러일것인데요. 

리액트에서 배열을 렌더링 할 때에는 `key` 라는 `props` 를 설정해야합니다. `key` 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 지금의 경우엔 `id` 가 고유 값이지요.

예시
```js
<div>
  {users.map((user, index) => (
    <User user={user} key={user.id} />
  ))}
</div>
```

만약 배열이 가지고있는  고유값이 없다면. `map() `함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 `index` 를 `key` 로 사용하시면 됩니다.
```js
<div>
  {users.map((user, index) => (
    <User user={user} key={index} />
  ))}
</div>
```

## key의 존재유무에 따른 업데이트 방식
```js
const array = ['a', 'b', 'c', 'd'];
```
위와 같은 배열이 있다 가정합니다.

```js
array.map(item=> <div>{item}</div>)
```
다음과 같이 렌더링하고 

위 배열의 `b` 와 `c` 사이에 `z` 를 삽입하게 된다면, 리렌더링을 하게 될 때 `<div>b</div>` 와 `<div>c</div>` 사이에 새 `div` 태그를 삽입을 하게 되는 것이 아니라, 기존의 `c` 가 `z` 로바뀌고, `d` 는 `c` 로 바뀌고, 맨 마지막에 `d` 가 새로 삽입됩니다.

그 다음에 `a` 를 제거하게 된다면, 기존의 `a` 가 `b` 로 바뀌고, `b` 는 `z` 로 바뀌고, `z`는 `c`로 바뀌고, `c`는 `d` 로바뀌고, 맨 마지막에 있는 `d` 가 제거됩니다.

이러한 방식은 매우 비효율적입니다.<br/>
하지만 `key`가 있다면 이 작업은 더 좋아집니다.
```js
[
  {
    id: 0,
    text: 'a'
  },
  {
    id: 1,
    text: 'b'
  },
  {
    id: 2,
    text: 'c'
  },
  {
    id: 3,
    text: 'd'
  }
];
```
위 객체와 같이 `key`로 사용할 수 있는 고유값이 있고

```js
array.map(item=><div key="id">{item.text}</div>)
```
이렇게 렌더링된다면 배열이 업데이트가 될때 `key` 가 없을 때 처럼 비효율적으로 업데이트 하는 것이 아니라, 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제합니다.

## key 주의할 점
배열을 렌더링 할 때에는 고유한 key 값이 있는것이 중요하며, 만약에 배열안에 중복되는 key 가 있을 때에는 렌더링시에 오류메시지가 콘솔에 나타나게 되며, 업데이트가 제대로 이루어지지 않게 됩니다.