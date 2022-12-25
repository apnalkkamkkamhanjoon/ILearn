__React-Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리__

```Javascript
import { Routes } from "react-router"; 
import { BrowserRouter as Router, Route } from "react-router-dom";
<Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
```
