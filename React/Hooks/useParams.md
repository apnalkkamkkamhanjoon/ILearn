# useParams
> URL parameter를 조회할 때 사용하는 React Hooks이다.
사용할 때 Route의 주소설정은 /:keyword를 입력한다.

# 예제
App.js
```js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />}/>
      </Routes>
    </Router>
  );
};

export default App;
```

Movie.js
```js
import React from 'react';
import { Link } from 'react-router-dom';

const IMG_BASE_URL="https://image.tmdb.org/t/p/w1280/";

function Movie({id , title, img, star }) {
    return (
        <div className='movie-container'>
            <img src={IMG_BASE_URL + img} alt="영화 포스터" />
            <div className='movie-info'>
                {/* id값을 넘겨줌 */}
                <Link to={`/${id}`}><h4>{title}</h4></Link>
                <span>{star}</span>
            </div>
        </div>
    );
}

export default Movie;
```

Detail.js
```js
import React from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../movieDummy";
import Overview from "../components/Overview";

function Detail() {
  // 받은 id값 조회
  const { id } = useParams();
  const movieList = dummy.results.filter((movie) => movie.id === Number(id));
  return (
    <div>
      {movieList.map((movie) => (
        <Overview
          key={movie.id}
          title={movie.title}
          star={movie.vote_average}
          img={movie.poster_path}
          introduce={movie.overview}
        />
      )
      )}
    </div>
  );
}
export default Detail;
```