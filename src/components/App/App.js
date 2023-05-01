import '../../styles/App.css';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop.js';
import Home from '../Home/Home.js';
import MoviePage from '../MoviePage/MoviePage.js';
import About from '../About/About.js';
import Favorite from '../Favorite/Favorite.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path={'/movie/:id'} element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
