import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Options from '../Options';

import TestFP from '../modals/TestFP';
import TestOOP from '../modals/TestOOP';
import WebRTC from '../components/WebRTC';

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
      <Stack.Screen name="TestFP" component={TestFP} />
      <Stack.Screen name="TestOOP" component={TestOOP} />
      <Stack.Screen name="WebRTC" component={WebRTC} />
    </Stack.Navigator>
  )
};

export default HomeScreen;
