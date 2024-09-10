import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonColors from '../screens/pokemonColors/PokemonColors';
import {StyleSheet} from 'react-native';
import PokemonForms from '../screens/pokemonForms/PokemonForms';
import PokemonMachines from '../screens/pokemonMachines/PokemonMachines';
import CreatePost from '../screens/createPost/CreatePost';

const Stack = createNativeStackNavigator();

function RootNavigation(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: styles.contentStyle,
          headerShown: true,
        }}>
                  <Stack.Screen name="PokemonColor" component={PokemonColors} />

        <Stack.Screen name="PokemonForms" component={PokemonForms} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="PokemonMachines" component={PokemonMachines} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: '#ffffff',
  },
});
