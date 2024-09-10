import {AxiosError} from 'axios';

export interface PokemonColorItem {
  name: string;
  url: string;
}

export interface PokemonColorsResponse {
  count: number;
  next?: number;
  previous?: number;
  results: PokemonColorItem[];
}

export type PokemonColorsError = AxiosError;
