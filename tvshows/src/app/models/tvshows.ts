export interface ResponseResult {
  score: number;
  show: Show;
}
export interface Show {
  id: number;
  name: string;
  genres: string[];
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

export interface Episode {
  name: string;
  season: string;
  number: string;
  url: string;
}
