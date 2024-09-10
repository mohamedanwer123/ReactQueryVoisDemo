import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './PokemonMachines.styles';
import useGetPokemonMachines from '../../hooks/useGetPokemonMachines';

const PokemonMachines = (): React.JSX.Element => {
  const {query} = useGetPokemonMachines();
  console.log('QUERY', query);

  const machinesList = () => {
    const data = query.data?.pages.map(i => i.results).flat();

    return (
      <View style={styles.machinesListContainer}>
        <FlatList
          style={styles.machinesList}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.machinesListItem}>
              <Text>{item.url}</Text>
            </View>
          )}
          onEndReachedThreshold={0.5}
          // onEndReached={() => query.fetchNextPage()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {query.isPending ? (
        <Text>Loading</Text>
      ) : query.isError ? (
        <Text>Error</Text>
      ) : (
        query.isSuccess && machinesList()
      )}

      <TouchableOpacity
        style={styles.loadMorehButton}
        onPress={() => {
          query.fetchNextPage();
          // query.refetch();
        }}>
        <Text style={styles.loadMoreButtonText}>Load More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonMachines;
