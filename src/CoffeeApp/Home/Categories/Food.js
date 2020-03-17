import React from 'react';
import { View, Text } from 'react-native';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Food extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>Cake</Text>
      </View>
    );
  }
}
