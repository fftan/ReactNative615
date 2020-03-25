import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabCoffeeShop from './src/CoffeeApp/navigators/TabNavigators';
import RootReducer from './src/CoffeeApp/modules/reducers/RootReducer';
import Product from './src/CoffeeApp/ProductsScreen/Product';
import Header from './src/CoffeeApp/components/Header';

import ChooseApp from './src/ChooseApp';

import App2 from './src/app2/Home';
const Stack = createStackNavigator();

export const refMainNav = React.createRef();

const store = createStore(RootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={refMainNav}>
        <Stack.Navigator>
          <Stack.Screen name="ChooseApp" component={ChooseApp} />
          <Stack.Screen name="CoffeeApp" component={TabCoffeeShop} options={{ headerShown: false }} />
          <Stack.Screen name="App2" component={App2} />
          <Stack.Screen name="ModalProduct" component={Product} options={{ header: ({ scene, previous, navigation }) => <Header navigation={navigation} /> }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}