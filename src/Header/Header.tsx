//import logo
import "./header.css";
import { ReactComponent as MarvelLogo } from "../assets/marvel_logo.svg";
import { AppContext } from "../context";
import { useContext } from "react";
import Search from "./Search";

export default function Header() {
  const { searchQuery, setSearchQuery, setActivePage, setActiveCharacters } =
    useContext(AppContext);

  const handleSearch = (val: string) => {
    setActivePage(1);
    setActiveCharacters([]);
    setSearchQuery(val);
  };

  return (
    <header>
      <div>
        <a href="/">
          <MarvelLogo />
        </a>
      </div>
      <Search value={searchQuery} onSearch={handleSearch} />
    </header>
  );
}
