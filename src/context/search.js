import { createContext } from "react";

export const SearchContext = createContext({
  animeData: [],
  singleData: {},
  topanimeData: [],
  topMangaData: [],
  setTopMData: () => {},
  search: () => {},
  setData: () => {},
  setSingle: () => {},
  setTopData: () => {},
  searchTop: () => {},
  searchTopM: () => {},
  searchbyID: () => {}
});
