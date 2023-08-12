# Import Style Component

tsx

```tsx
import styles from "./test.module.css";

function Heading(props) {
  // const variable = "red";
  return (
    <div className="title">
      <h1 className={styles.red}>{props.heading}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Heading heading="heading" />
      <h1>스타일</h1>
    </div>
  );
}
```

css

```css
h1.red {
  color: blue;
}
```

## sass 사용법

> 따로 config파일을 정의 하지 않고 css 파일을 sass 파일로 바꾸고 `yarn add sass --dev`를 해주면 알아서 설정을 해준다.
