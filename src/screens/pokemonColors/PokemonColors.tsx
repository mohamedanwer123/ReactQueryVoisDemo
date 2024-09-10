import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './PokemonColors.styles';
import useGetPokemonColors from '../../hooks/useGetPokemonColors';

const PokemonColors = (): React.JSX.Element => {
  const {query} = useGetPokemonColors();
  console.log(query);

  return (
    <View style={styles.container}>
      {query.isPending ? (
        <Text>Loading</Text>
      ) : query.isError ? (
        <Text>Error</Text>
      ) : (
        query.isSuccess && <Text>Success</Text>
      )}

      <TouchableOpacity
        style={styles.refetchButton}
        onPress={() => {
          query.refetch();
        }}>
        <Text style={styles.refetchButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonColors;
