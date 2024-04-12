import CharactersList from "./CharactersList/CharactersList";
import { ComicsList } from "./ComicsList/ComicsList";
import Header from "./Header/Header";
import "./app.css";
import { useState } from "react";
import { AppContext } from "./context";
import { Character } from "./schema/characters";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDebounce } from "./utils";

const queryClient = new QueryClient();

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCharacters, setActiveCharacters] = useState<Character[]>([]);
  const [activePage, setActivePage] = useState(1);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  console.log(searchQuery, activeCharacters);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider
          value={{
            searchQuery,
            debouncedSearchQuery,
            setSearchQuery,
            activeCharacters,
            setActiveCharacters,
            activePage,
            setActivePage,
          }}
        >
          <Header />
          <div className="content">
            <CharactersList />
            <ComicsList />
          </div>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
