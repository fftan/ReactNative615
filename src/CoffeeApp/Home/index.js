import React from 'react';
import { View, Text, ScrollView, ImageBackground, FlatList, StatusBar, Dimensions, TouchableOpacity } from 'react-native';

// Components
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { TabTopInHome } from '../navigators/TabNavigators';

// Stylesheets
import styles from './styles';
import MainStyles from '../Setting/MainStyles';

// Variables
import slide1 from '../../resources/slide1.jpg';
import slide2 from '../../resources/slide2.jpg';
import slide3 from '../../resources/slide3.jpg';
import slide4 from '../../resources/slide4.jpg';

const listSlide = [
  { url: slide1 },
  { url: slide2 },
  { url: slide3 },
  { url: slide4 },
];

const sizeScreen = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.refSlide = React.createRef();
    this.contenOffset = 0;
  }

  componentDidMount = () => {
    this.autoNextSlide();
  }

  autoNextSlide = () => {
    this.autoScroll = setInterval(() => {
      const index = this.contenOffset / sizeScreen.width;

      const scrollModel = { offset: 0 };

      if (index < listSlide.length - 1) {
        scrollModel.offset = sizeScreen.width + this.contenOffset;
      }

      this.refSlide.current?.scrollToOffset(scrollModel);
    }, 5000);
  }

  renderSlide = ({ item, index }) => {
    return (
      <ImageBackground source={item.url} style={styles.containerSlide} />
    );
  }

  render = () => {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar hidden />
        <View style={{ marginBottom: 10 }}>
          <FlatList
            ref={this.refSlide}
            horizontal
            onScroll={e => { this.contenOffset = e.nativeEvent.contentOffset.x }}
            pagingEnabled
            data={listSlide}
            renderItem={this.renderSlide}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TabTopInHome />
        </View>
      </ScrollView>
    );
  }
}
