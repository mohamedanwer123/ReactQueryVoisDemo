import axios, {AxiosResponse} from 'axios';

const getPokemonForms = (signal: AbortSignal): Promise<AxiosResponse> => {
  return axios.get('https://pokeapi.co/api/v2/pokemon-form', {
    signal,
  });
};

const getPokemonFormDetails = (
  name: string,
  signal: AbortSignal,
): Promise<AxiosResponse> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`, {
    signal,
  });
};

export default {
  getPokemonForms,
  getPokemonFormDetails,
};
