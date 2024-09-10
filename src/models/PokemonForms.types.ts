import {AxiosError} from 'axios';

export interface PokemonFormItem {
  name: string;
  url: string;
}

export interface PokemonFormsResponse {
  count: number;
  next?: number;
  previous?: number;
  results: PokemonFormItem[];
}

export type PokemonFormsError = AxiosError;
