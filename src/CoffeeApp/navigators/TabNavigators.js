import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './StackNavigators';
import { OptionsScreen } from './StackNavigators';
import Coffee from '../Home/Categories/Coffee';
import Cheese from '../Home/Categories/Cheese';
import Cake from '../Home/Categories/Cake';
import Food from '../Home/Categories/Food';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  indicatorStyle: {
    backgroundColor: '#fdcb6e',
    position: 'absolute',
    top: 0,
  },
  showIcon: true,
  style: {
    marginTop: 15,
    backgroundColor: '#fff',
  }
};

const tabBarIcon = (iconName, size) => {
  return (
    <MTIcon name={iconName} size={size} />
  );
};

const TabCoffeeShop = () => {
  return (
    <Tab.Navigator tabBarPosition="bottom" tabBarOptions={tabBarOptions} swipeEnabled={false}>
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: () => tabBarIcon("home-outline", 22) }} />
      <Tab.Screen name="Options" component={OptionsScreen} options={{ tabBarIcon: () => tabBarIcon("settings-outline", 22) }} />
    </Tab.Navigator>
  )
};

export const TabTopInHome = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: '#e17055',
        activeTintColor: '#fff',
        indicatorStyle: {
          backgroundColor: '#fdcb6e',
          height: 35,
          borderRadius: 30,
          borderBottomWidth: 0,
          borderStartColor: '#fff'
        },
        style: {
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          marginHorizontal: 12,
        },

        tabStyle: {
          height: 40,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}

    >
      <Tab.Screen name="Coffee" component={Coffee} options={{ title: 'Coffee' }} />
      <Tab.Screen name="Cheese" component={Cheese} options={{ title: 'Cheese' }} />
      <Tab.Screen name="Cake" component={Cake} options={{ title: 'Cake' }} />
      <Tab.Screen name="Food" component={Food} options={{ title: 'Food' }} />
    </Tab.Navigator>
  )
}

export default TabCoffeeShop;