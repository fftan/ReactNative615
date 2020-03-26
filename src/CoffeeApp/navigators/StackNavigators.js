import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Options from '../Options';
import Cart from '../Cart';
import RealmTest from '../Options/RealmTest';

const Stack = createStackNavigator();
export const refModalProduct = React.createRef();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ header: () => <SafeAreaView /> }} />
    </Stack.Navigator>
  );
};

export const CartScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export const OptionsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Options" component={Options} options={{ headerShown: false }} />
      <Stack.Screen name="RealmTest" component={RealmTest} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
