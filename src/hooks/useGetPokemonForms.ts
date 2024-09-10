import {useQuery} from '@tanstack/react-query';
import services from '../services';
import CachedKeys from '../configs/reactQuery/ReactQueryCachedKeys';
import {
  PokemonFormsError,
  PokemonFormsResponse,
} from '../models/PokemonForms.types';

const useGetPokemonForms = () => {
  const query = useQuery<PokemonFormsResponse, PokemonFormsError>({
    queryKey: [CachedKeys.POKEMON_FORMS],
    queryFn: async queryFnParams => {
      const response = await services.pokemon.pokemonForms.getPokemonForms(
        queryFnParams.signal,
      );
      return response.data;
    },
  });

  return {
    query,
  };
};

export default useGetPokemonForms;
