/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './PokemonForms.styles';
import useGetPokemonForms from '../../hooks/useGetPokemonForms';
import {PokemonFormItem} from '../../models/PokemonForms.types';
import useGetPokemonFormsDetails from '../../hooks/useGetPokemonFormsDetails';

const PokemonForms = (): React.JSX.Element => {
  const [selectBokemon, setSelectBokemon] = useState<PokemonFormItem>({
    name: '',
    url: '',
  });
  const {query} = useGetPokemonForms();
  console.log(query);

  // refetch when state change
  useGetPokemonFormsDetails(selectBokemon.name);

  const formsList = () => (
    <View style={styles.formsListContainer}>
      <FlatList
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        data={query.data?.results}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.formButton,
              {
                backgroundColor:
                  item.name === selectBokemon.name ? '#187bde' : '#dfe5eb',
              },
            ]}
            onPress={() => {
              setSelectBokemon(item);
            }}>
            <Text
              style={[
                styles.formButtonText,
                {
                  color:
                    item.name === selectBokemon.name ? '#ffffff' : '#000000',
                },
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {query.isPending ? (
        <Text>Loading</Text>
      ) : query.isError ? (
        <Text>Error</Text>
      ) : (
        query.isSuccess && formsList()
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

export default PokemonForms;
