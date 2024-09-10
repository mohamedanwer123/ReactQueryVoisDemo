import {AxiosError} from 'axios';

export interface PokemonMachineItem {
  url: string;
}

export interface PokemonMachinesResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonMachineItem[];
}

export type PokemonMachinesError = AxiosError;
