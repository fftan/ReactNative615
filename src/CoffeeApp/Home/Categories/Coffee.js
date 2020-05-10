import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, Dimensions, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackActions } from '@react-navigation/native';

// Components
import Product from '../../ProductsScreen/Product';
import { SELECTED_PRODUCT } from '../../modules/actions/Types';
import { refMainNav } from '../../../../App';

// Stylesheets
import styles from './styles';
import MainStyles from '../../Setting/MainStyles';

// Variables
import img1 from '../../../resources/Products/img1.jpg';
import img2 from '../../../resources/Products/img2.jpg';
import img3 from '../../../resources/Products/img3.jpg';
import img4 from '../../../resources/Products/img4.jpg';
import crafting_img1 from '../../../resources/Products/crafting_img1.jpg';

const listCoffee = [
  { name: img1 },
  { name: img2 },
  { name: img3 },
  { name: img4 },
];

const sizeScreen = Dimensions.get('window');

export default class Coffee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.refProduct = React.createRef();
  }

  clickItem = (item) => {
    const stackAction = StackActions.push('ModalProduct', item);
    refMainNav.current?.dispatch(stackAction);
  }

  renderTitle = (title) => {
    return (
      <View style={styles.viewTitle}>
        <View style={{ flex: 1 }}>
          <Text style={MainStyles.h3}>{title}</Text>
        </View>
        <TouchableOpacity style={[styles.btnShowAll, MainStyles.viewCenter]}>
          <Text style={styles.txtShowAll}>Show All</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => this.clickItem(item)}>
        <Image source={item.name} style={{ width: 100, height: 100, borderRadius: 3 }} />
      </TouchableOpacity>
    );
  }

  render = () => {
    return (
      <ScrollView style={styles.container}>
        {this.renderTitle('SUMMER ICE-COFFEE')}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listCoffee}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {this.renderTitle('COFFEE CRAFTING')}
        <View style={{ paddingHorizontal: 12, marginBottom: 10 }}>
          <Image source={crafting_img1} style={{ width: sizeScreen.width - 24, height: 130, borderRadius: 3 }} />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listCoffee}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

Coffee.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
}