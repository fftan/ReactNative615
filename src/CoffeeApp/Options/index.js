import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// Components


// Stylesheets
import styles from './styles';
import MainStyles from '../Setting/MainStyles';

// Variables


export default class Options extends React.Component {
  constructor(props) {
    super(props);

  }

  comeListApp = () => {
    const { navigation } = this.props;
    navigation.replace('ChooseApp');
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
