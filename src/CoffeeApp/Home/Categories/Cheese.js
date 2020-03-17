import React from 'react';
import { View, Text } from 'react-native';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Cheese extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>Cheese</Text>
      </View>
    );
  }
}
