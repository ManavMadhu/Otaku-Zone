import { createContext } from "react";

export const SearchContext = createContext({
  animeData: [],
  singleData: {},
  topanimeData: [],
  topMangaData: [],
  topCharData: [],
  setTopChar: () => {},
  setTopMData: () => {},
  search: () => {},
  setData: () => {},
  setSingle: () => {},
  setTopData: () => {},
  searchTop: () => {},
  searchTopM: () => {},
  searchbyID: () => {},
  searchTopChar: () => {}
});
