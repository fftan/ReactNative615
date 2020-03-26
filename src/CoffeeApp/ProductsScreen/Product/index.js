import React from 'react';
import { View, Text, Modal, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { refMainNav } from '../../../../App';

// Components


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

const listOptions = [
  { name: 'Sữa' },
  { name: 'Đường' },
  { name: 'Đá' },
];

const listSize = [
  { name: 'Lớn' },
  { name: 'Vừa' },
  { name: 'Nhỏ' },
]

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      selectedOptions: {},
    }
  }

  onShowOptions = () => {
    this.setState({ isVisible: true });
  }

  onHideOptions = () => {
    this.setState({ isVisible: false });
  }

  clickItemOptions = (item) => {
    this.setState({ selectedOptions: item.name });
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

  renderGridItem = (item, index) => {
    return (
      <TouchableOpacity style={styles.btnOption} key={index}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render = () => {
    const { route } = this.props;
    const { isVisible } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 12, marginBottom: 10 }}>
            <Image source={route.params.name} style={{ width: '100%', height: 300 }} />
          </View>
          <TouchableOpacity style={styles.btnOptions} onPress={() => this.onShowOptions()}>
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

        <Modal visible={isVisible}>
          <View style={styles.viewOption}>
            <Text>Thêm:</Text>
            {listOptions.map((item, index) => this.renderGridItem(item, index))}
          </View>
          <View style={styles.viewOption}>
            <Text>Size:</Text>
            {listSize.map((item, index) => this.renderGridItem(item, index))}
          </View>
          <TouchableOpacity onPress={() => this.onHideOptions()} style={[styles.btnOptions, styles.btnSubmitOption]}>
            <Text style={[MainStyles.h2, { color: '#fff' }]}>Submit</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}