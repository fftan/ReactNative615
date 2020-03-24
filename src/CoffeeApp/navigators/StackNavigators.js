import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigators from '../navigators/TabNavigators';
import Home from '../Home';
import Options from '../Options';
import Cart from '../Cart';
import Product from '../ProductsScreen/Product';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Cart" component={Cart} options={{ header: () => <SafeAreaView /> }} />
    </Stack.Navigator>
  );
};

export const OptionsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Options" component={Options} options={{ header: () => <SafeAreaView /> }} />
    </Stack.Navigator>
  );
};

const showModal = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Main" component={TabNavigators} options={{ headerShown: false }} />
      <Stack.Screen name="ProductModal" component={Product} />
    </Stack.Navigator>
  )
}

export default HomeScreen;
