export interface MovieList {
    id: number;
    cover: string;
    title: string;
    rating: string;
    year: string;
    description: string;
  }

  export interface MovieDetails {
    id: number;
    cover: string;
    title: string;
    rating: string;
    year: string;
    description: string;
    background: string;
    cast: string[];
    director: string;
    directorPhoto: string;
    duracion: number,
    generos: string
  }
  export interface Actor {
    profile_path: string;
    name: string;
    character: string;
  }
  