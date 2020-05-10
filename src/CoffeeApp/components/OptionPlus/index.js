import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

// Components
import SmallProduct from '../SmallProduct';

// Stylesheets
import styles from './styles';
import MainStyles from '../../Setting/MainStyles';

// Variables

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

export default class OptionPlus extends React.Component {
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

  renderGridItem = (item, index) => {
    return (
      <TouchableOpacity style={styles.btnOption} key={index}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render = () => {
    const { isVisible } = this.state;
    return (
      <Modal visible={isVisible}>
        <SmallProduct />
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
    );
  }
}
