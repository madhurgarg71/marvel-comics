import { useContext } from "react";
import Comic from "./../Comic/Comic";
import Pagination from "../components/Pagination/Pagination";
import Loader from "../Loader/Loader";
import { AppContext } from "../context";
import { useQuery } from "react-query";
import "./comics-list.css";
import { fetchComics } from "../api";
import { COMICS_LIMIT } from "../constants";

export function ComicsList() {
  const { debouncedSearchQuery, activeCharacters, activePage, setActivePage } =
    useContext(AppContext);
  const selectedCharacters = activeCharacters.map((item) => item.id).join(",");

  const { isLoading, data } = useQuery({
    queryKey: [
      "comicsData",
      activePage,
      debouncedSearchQuery,
      selectedCharacters,
    ],
    queryFn: () =>
      fetchComics(activePage, debouncedSearchQuery, selectedCharacters).then(
        (data) => data.data
      ),
  });

  const handleChange = (pageNumber: number) => {
    //smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActivePage(pageNumber);
  };

  return (
    <div className="browse-comics">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="comics-list">
          {data?.results?.map((item) => {
            const thumbnailUrl = `${item.thumbnail?.path}.${item.thumbnail?.extension}`;
            return (
              <Comic
                title={item.title || "No title"}
                key={item.id}
                thumbnailUrl={thumbnailUrl}
              />
            );
          })}
        </div>
      )}
      <Pagination
        activePage={activePage}
        itemsCountPerPage={COMICS_LIMIT}
        totalItemsCount={data?.total || 0}
        pageRangeDisplayed={5}
        onChange={handleChange}
      />
    </div>
  );
}
