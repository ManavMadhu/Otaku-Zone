import Header from "./components/header";
import Home from "./pages/home";
import SearchView from "./pages/searchview";
import SingleView from "./pages/singleview";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route,
} from "react-router-dom";
import { SearchContext } from "./context/search";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [topanimeData, setTopAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});
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

  const search = async (searchTerm) => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&order_by=title&sort=asc&limit=10`
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

  return (
    <SearchContext.Provider
      value={{
        search,
        searchTop,
        searchTopM,
        topMangaData,
        animeData,
        setData,
        setTopMData,
        singleData,
        setSingle,
        topanimeData,
        setTopData,
        searchbyID
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
            </Routes>
          </main>
        </div>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
