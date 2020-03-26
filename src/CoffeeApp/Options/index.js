import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions } from '@react-navigation/native';
// Components


// Stylesheets
import styles from './styles';
import MainStyles from '../Setting/MainStyles';
import { refMainNav } from '../../../App';

// Variables

const list = [
  { name: 'Switch App' },
  { name: 'Test Realm' },
]

export default class Options extends React.Component {
  constructor(props) {
    super(props);

  }

  clickItem = (item, index) => {
    if (index === 0) {
      const replaceAction = StackActions.replace('ChooseApp');
      refMainNav.current?.dispatch(replaceAction);
      return;
    }
    if (index === 1) {
      const { navigation } = this.props;
      navigation.navigate('RealmTest');
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={MainStyles.buttonOfList} onPress={() => this.clickItem(item, index)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render = () => {
    return (
      <View contentContainerStyle={styles.container}>
        <FlatList
          data={list}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

Options.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
