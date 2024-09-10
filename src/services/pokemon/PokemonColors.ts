import axios, {AxiosResponse} from 'axios';

const getPokemonColors = (signal: AbortSignal): Promise<AxiosResponse> => {
  return axios.get('https://pokeapi.co/api/v2/pokemon-color222', {
    signal,
  });
};

export default {
  getPokemonColors,
};
