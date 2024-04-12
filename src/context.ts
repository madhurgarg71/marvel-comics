import { createContext } from "react";
import { Character } from "./schema/characters";

export const AppContext = createContext({
  searchQuery: "",
  debouncedSearchQuery: "",
  setSearchQuery: (query: string) => {},
  activeCharacters: [] as Character[],
  setActiveCharacters: (characters: Character[]) => {},
  activePage: 1,
  setActivePage: (pageNumber: number) => {},
});
