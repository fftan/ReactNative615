import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabCoffeeShop from './src/CoffeeApp/navigators/TabNavigators';

import ChooseApp from './src/ChooseApp';

import App2 from './src/app2/Home';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChooseApp" component={ChooseApp} />
        <Stack.Screen name="CoffeeApp" component={TabCoffeeShop} options={{ headerShown: false }} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}