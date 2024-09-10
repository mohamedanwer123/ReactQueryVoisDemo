import {useInfiniteQuery} from '@tanstack/react-query';
import services from '../services';
import CachedKeys from '../configs/reactQuery/ReactQueryCachedKeys';
import {
  PokemonMachinesResponse,
  PokemonMachinesError,
} from '../models/PokemonMachinestypes';
import url from '../utils/url';

interface NextPageQueryParams {
  offset: number;
}

const useGetPokemonMachines = () => {
  const query = useInfiniteQuery<PokemonMachinesResponse, PokemonMachinesError>(
    {
      queryKey: [CachedKeys.POKEMON_MACHINES],
      queryFn: async queryFnParams => {
        const response =
          await services.pokemon.pokemonMachines.getPokemonMachines(
            queryFnParams.pageParam as number,
            queryFnParams.signal,
          );
        return response.data;
      },
      initialPageParam: 20,
      getNextPageParam: lastPage => {
        const params = url.getUrlQueryParamsValues<NextPageQueryParams>(
          lastPage.next,
        );
        return params.offset;
      },
    },
  );

  return {
    query,
  };
};

export default useGetPokemonMachines;
