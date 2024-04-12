import { useContext } from "react";
import Character from "./../Character/Character";
import "./character-list.css";
import { useQuery } from "react-query";
import { fetchCharacters } from "../api";
import { AppContext } from "../context";
import Caraousel from "../components/Caraousel/Caraousel";

export default function CharactersList() {
  const {
    setActiveCharacters,
    setSearchQuery,
    setActivePage,
    activeCharacters,
  } = useContext(AppContext);
  const { isLoading, data } = useQuery({
    queryKey: ["charactersData"],
    queryFn: () => fetchCharacters().then((data) => data.data),
  });

  const handleClickToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    const id = Number(target.closest(".character")?.getAttribute("data-id"));
    if (!id) return;

    const character = data?.results?.find((item) => item.id === id);
    if (!character) return;

    const index = activeCharacters.findIndex((item) => item.id === id);
    if (index === -1) {
      setActiveCharacters([...activeCharacters, character]);
    } else {
      setActiveCharacters(activeCharacters.filter((item) => item.id !== id));
    }
    setActivePage(1);
    setSearchQuery("");
  };

  const isSelected = (id: number | undefined) => {
    return activeCharacters.findIndex((item) => item.id === id) !== -1;
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 6,
  };

  return (
    <div onClick={handleClickToggle} className="characters-list">
      <Caraousel {...settings}>
        {data?.results?.map((item) => {
          const thumbnailUrl = `${item.thumbnail?.path}.${item.thumbnail?.extension}`;
          return (
            <Character
              selected={isSelected(item.id)}
              key={item.id}
              id={item.id}
              thumbnailUrl={thumbnailUrl}
            />
          );
        })}
      </Caraousel>
    </div>
  );
}
