declare namespace Express {
  export interface Request {
    permission: string[];
    roles: string[]
  }
}
declare module 'API' {
  export type Roles = {
    id?: string
    name: string
    description: string
  }
  export type Planet = {
    id?: string
    name: string;
    rotation_period?: number;
    orbital_period?: number;
    diameter?: number;
    climate?: string[];
    gravity?: string;
    terrain?: string[];
    surface_water?: number;
    population?: number;
  }
  export type User = {
    id?: string;
    username: string;
    api_key: string;
    roles?: string[] | string;
    permissions?: string[];
  }
  export type Character = {
    id: string;
    name: string;
    height: number;
    mass: number;
    hair_color: string[];
    skin_color: string[];
    eye_color: string[];
    birth_year: string;
    gender: string;
    homeworld: string;
    species: string;
  }
}

