import {useQuery} from '@tanstack/react-query';
import services from '../services';
import CachedKeys from '../configs/reactQuery/ReactQueryCachedKeys';
import {
  PokemonColorsResponse,
  PokemonColorsError,
} from '../models/PokemonColors.types';

const useGetPokemonColors = () => {
  let x = 1;
  const query = useQuery<PokemonColorsResponse, PokemonColorsError>({
    queryKey: [CachedKeys.POKEMON_COLORS],
    queryFn: async queryFnParams => {
      const response = await services.pokemon.pokemonColors.getPokemonColors(
        queryFnParams.signal,
      );
      return response.data;
    },
  });

  return {
    query,
  };
};

export default useGetPokemonColors;
