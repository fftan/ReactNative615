import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabCoffeeShop from './src/CoffeeApp/navigators/TabNavigators';

import ChooseApp from './src/ChooseApp';

import ManagementCoffee from './src/ManagementCoffee/Home';
const Stack = createStackNavigator();

export const refMainNav = React.createRef();

App = () => {
  return (
    <NavigationContainer ref={refMainNav}>
      <Stack.Navigator>
        <Stack.Screen name="ChooseApp" component={ChooseApp} />
        <Stack.Screen name="CoffeeApp" component={TabCoffeeShop} options={{ headerShown: false }} />
        <Stack.Screen name="ManagementCoffee" component={ManagementCoffee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;