import React from 'react';
import { View, Text } from 'react-native';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Product extends React.Component {
  render = () => {
    const data = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text>{data.name}</Text>
      </View>
    );
  }
}
