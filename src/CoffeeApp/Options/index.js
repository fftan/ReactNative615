import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
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
