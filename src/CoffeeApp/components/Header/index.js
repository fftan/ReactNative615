import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Header extends React.Component {
  render = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.tabBar}>
        <View style={styles.leftTabBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightTabBar}>
          <Icon name='magnify' size={30} />
        </View>
      </View>
    );
  }
}
