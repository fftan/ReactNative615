import React from 'react';
import { View, Text, Modal, Image, ScrollView } from 'react-native';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { route } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={route.params.name} style={{ width: '100%', height: 300 }} />
        </ScrollView>
      </View>
    );
  }
}