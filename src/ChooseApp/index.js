import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Components


// Stylesheets
import styles from './styles';

// Variables
import ListApp from '../ChooseApp/ListApp';

export default class ChooseApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity style={styles.viewItem} onPress={() => navigation.replace(item.name)}>
        <Text style={styles.txtTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render = () => {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ListApp}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
