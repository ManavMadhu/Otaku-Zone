import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/search";
import Animelist from "../components/animelist";
import { Container } from "react-bootstrap";

function SearchView() {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (search.animeData === undefined || search.animeData === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem("myData")));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
    console.log(search.animeData);
  }, []);

  return <div className="home-background"><Container>{(dataExists && <Animelist data={search.animeData}/>) || "Data doesnt Exists"}</Container></div>;
}

export default SearchView;
