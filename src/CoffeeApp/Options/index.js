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


export default class Options extends React.Component {
  constructor(props) {
    super(props);

  }

  comeListApp = () => {
    const replaceAction = StackActions.replace('ChooseApp');
    refMainNav.current?.dispatch(replaceAction);
  }

  render = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={MainStyles.buttonOfList} onPress={this.comeListApp}>
          <Text>Switch App</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

Options.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
