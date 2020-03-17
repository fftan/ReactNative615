import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Options from '../Options';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ header: () => <SafeAreaView /> }} />
    </Stack.Navigator>
  )
};

export const OptionsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  )
};

export default HomeScreen;
