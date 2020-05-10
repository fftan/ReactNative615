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

const options = [
  { name: 'ChooseApp' },
  { name: 'TestFP' },
  { name: 'TestOOP' },
  { name: 'WebRTC' }
];

const list = [
  { name: 'Switch App' },
  { name: 'Test Realm' },
]

export default class Options extends React.Component {
  constructor(props) {
    super(props);

  }

  comeListApp = (item) => {
    const screenTarget = options.find(x => x.name === item.name);
    const replaceAction = StackActions.replace(screenTarget.name);
    refMainNav.current?.dispatch(replaceAction);
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

  renderOptions = () => options.map((item, index) => {
    return (
      <TouchableOpacity style={MainStyles.buttonOfList} onPress={() => this.comeListApp(item)}>
        <Text>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  })

  render = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.renderOptions()}
      </ScrollView>
    );
  }
}

Options.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
