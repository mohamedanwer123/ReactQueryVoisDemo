import axios, {AxiosResponse} from 'axios';

const getPokemonMachines = (
  offset: number,
  signal: AbortSignal,
): Promise<AxiosResponse> => {
  return axios.get(
    `https://pokeapi.co/api/v2/machine?limit=20&offset=${offset}`,
    {
      signal,
    },
  );
};

export default {
  getPokemonMachines,
};
