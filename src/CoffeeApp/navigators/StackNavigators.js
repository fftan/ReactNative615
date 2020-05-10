import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Options from '../Options';
import Cart from '../Cart';
import RealmTest from '../Options/RealmTest';

import TestFP from '../modals/TestFP';
import TestOOP from '../modals/TestOOP';
import WebRTC from '../components/WebRTC';

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
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="TestFP" component={TestFP} />
      <Stack.Screen name="TestOOP" component={TestOOP} />
      <Stack.Screen name="WebRTC" component={WebRTC} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
