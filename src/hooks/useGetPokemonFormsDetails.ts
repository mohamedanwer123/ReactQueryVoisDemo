import {useQuery} from '@tanstack/react-query';
import services from '../services';
import CachedKeys from '../configs/reactQuery/ReactQueryCachedKeys';
import {PokemonFormDetailsResponse} from '../models/PokemonFormDetails.types';
import {PokemonFormsError} from '../models/PokemonForms.types';

const useGetPokemonFormsDetails = (name: string) => {
  const query = useQuery<PokemonFormDetailsResponse, PokemonFormsError>({
    queryKey: [CachedKeys.POKEMON_FORM_DETAILS, name],
    queryFn: async queryFnParams => {
      const response =
        await services.pokemon.pokemonForms.getPokemonFormDetails(
          name,
          queryFnParams.signal,
        );
      return response.data;
    },
    enabled: !!name,
    // retry: 5,
    // // retryDelay: 1000,
    // retryDelay: (attemptIndex: number) =>
    //   Math.min(1000 * 2 ** attemptIndex, 30000),
  });


  
  return {
    query,
  };
};

export default useGetPokemonFormsDetails;
