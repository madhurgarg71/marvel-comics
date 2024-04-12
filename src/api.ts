import axios from "axios";
import { COMICS_LIMIT } from "./constants";
import { ComicDataWrapper, TFetchComicsParams } from "./schema/comics";
import { CharacterDataWrapper } from "./schema/characters";

export const fetchComics = async (
  pageNumber: number,
  searchQuery: string,
  selectedCharacters: string
): Promise<ComicDataWrapper> => {
  const params: TFetchComicsParams = {
    limit: COMICS_LIMIT,
    offset: (pageNumber - 1) * COMICS_LIMIT,
  };

  if (searchQuery) {
    params.titleStartsWith = searchQuery;
  }

  if (selectedCharacters !== "") {
    params.characters = selectedCharacters;
  }

  const res = await axios.get("/v1/public/comics", {
    params,
  });
  return res.data;
};

export const fetchCharacters = async (): Promise<CharacterDataWrapper> => {
  const res = await axios.get("/v1/public/characters", {
    params: {
      limit: 100,
      offset: 0,
    },
  });
  return res.data;
};
