import React from 'react';
import { View, Text, Modal, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { refMainNav } from '../../../../App';

// Components
import OptionPlus from '../../components/OptionPlus';

// Stylesheets
import styles from './styles';
import MainStyles from '../../Setting/MainStyles';

// Variables
import img1 from '../../../resources/Products/img1.jpg';
import img2 from '../../../resources/Products/img2.jpg';
import img3 from '../../../resources/Products/img3.jpg';
import img4 from '../../../resources/Products/img4.jpg';

const listCoffee = [
  { name: img1 },
  { name: img2 },
  { name: img3 },
  { name: img4 },
];

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      selectedOptions: {},
    };

    this.refOptionPlus = React.createRef();
  }

  clickItem = (item) => {
    const stackAction = StackActions.push('ModalProduct', item);
    refMainNav.current?.dispatch(stackAction);
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => this.clickItem(item)}>
        <Image source={item.name} style={{ width: 100, height: 100, borderRadius: 3 }} />
      </TouchableOpacity>
    );
  }

  render = () => {
    const { route } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 12, marginBottom: 10 }}>
            <Image source={route.params.name} style={{ width: '100%', height: 300 }} />
          </View>
          <TouchableOpacity style={styles.btnOptions} onPress={() => this.refOptionPlus.current?.onShowOptions()}>
            <Text style={MainStyles.h3}>size, thêm (sữa, đá, đường)</Text>
          </TouchableOpacity>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listCoffee}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <OptionPlus ref={this.refOptionPlus}/>
      </View>
    );
  }
}