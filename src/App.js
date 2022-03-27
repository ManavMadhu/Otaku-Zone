import Header from "./components/header";
import Home from "./pages/home";
import SearchView from "./pages/searchview";
import SingleView from "./pages/singleview";
import Loginpage from "./pages/loginpage";
import { useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SearchContext } from "./context/search";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [topanimeData, setTopAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [topCharData, settopCharData] = useState([]);
  const [topMangaData, setTopMangaData] = useState([]);

  const setTopData = (data) => {
    setTopAnimeData(data);
  };

  const setData = (data) => {
    setAnimeData(data);
  };

  const setSingle = (data) => {
    setSingleData(data);
  };

  const setTopMData = (data) => {
    setTopMangaData(data);
  };

  const setTopChar = (data) => {
    settopCharData(data);
  }

  const search = async (searchTerm) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&order_by=title&sort=asc&limit=15`
    );
    return await response.json();
  };

  const searchTop = async () => {
    // console.log("in search func");
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`);
    return await response.json();
  };

  const searchTopM = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/manga?filter=publishing`
    );
    return await response.json();
  };

  const searchbyID = async (idData) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${idData}`
    );
    return await response.json();
  };

  const searchTopChar = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/characters`
    );
    return await response.json();
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        searchTop,
        searchTopM,
        topCharData,
        topMangaData,
        animeData,
        setData,
        setTopMData,
        singleData,
        setSingle,
        topanimeData,
        setTopData,
        searchbyID,
        setTopChar,
        searchTopChar
      }}
    >
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/search-view" element={<SearchView />}></Route>
              <Route exact path="/single-view" element={<SingleView  />}></Route>
              <Route exact path="/login" element={<Loginpage  />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
