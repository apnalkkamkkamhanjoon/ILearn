# React 절대경로

> ./Foo, ../foo, ../../../foo-bar 같이 상대 경로로 작성할 때 , 이 파일을 다른 경로로 옮길 경우 상대경로이기 때문에 path가 달라져서 import 오류가 필연적으로 난다.
>
> import { Header } from 'components/Header' import { HeaderContainer } from 'containers/HeaderContainer' 이런 구조로 사용합니다.

## 사용법

### tsconfig.json or jsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```
