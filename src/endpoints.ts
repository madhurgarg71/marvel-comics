export const endpoints = {
  filterComicsByCharacter: (characterId: string) =>
    `/v1/public/characters/${characterId}/comics`,
  filterComicsBySeries: (seriesId: string) =>
    `/v1/public/series/${seriesId}/comics`,
  fetchComics: () => `/v1/public/comics`,
  fetchCharacters: () => `/v1/public/characters`,
};
