# Alias
타입 별칭이라고도 부르며 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미
```ts
type Age = number;
type Name = string;
type Player = {
    name: Name,
    age?: Age,
}

const playerNico : Player = {
    name : 'nico',
}

const playerLynn : Player = {
    name : 'lynn',
}

function playMaker1(name:string) : Player{
    return{
        name
    }
}

const playMaker2 = (name:string) : Player => ({name})

const nico = playMaker1("nico");
const nico2 = playMaker2('nico2');
nico.age = 18;
nico2.age = 18;
```