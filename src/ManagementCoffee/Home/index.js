import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  renderTable = ({ item, index }) => {
    // return (

    // );
  }

  render = () => {
    return (
      <View style={styles.container}>
        {/* <FlatList 
          data={}
          renderItem={this.renderTable}
        /> */}
      </View>
    );
  }
}
