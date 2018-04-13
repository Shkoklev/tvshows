export interface ResponseResult {
  score: number;
  show: Show;
}
export interface Show {
  id: number;
  url: string;
  name: string;
  officialSite: string;
  genres: string[];
  summary: string;
  language: string;
  status: string;
  premiered: string;
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

export interface Person {
  person: {
    name: string;
    image: {
      medium: string;
      original: string;
    };
  };
}
