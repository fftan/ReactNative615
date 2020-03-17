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

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  renderSlide = ({ item, index }) => {
    return (
      <ImageBackground source={item.url} style={styles.containerSlide}>
        {/* <View style={styles.viewBtnSlide}>
          <TouchableOpacity style={[styles.btnSlidePrev, MainStyles.viewCenter]}>
            <MIcon name="chevron-left" style={styles.icSlide} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewBtnSlide}>
          <TouchableOpacity style={[styles.btnSlideNext, MainStyles.viewCenter]}>
            <MIcon name="chevron-right" style={styles.icSlide} />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    );
  }

  renderFeature = () => {
    return (
      <View style={styles.viewTitle}>
        <View style={{ flex: 1 }}>
          <Text style={MainStyles.h3}>SUMMER ICE-COFFEE</Text>
        </View>
        <TouchableOpacity style={[styles.btnShowAll, MainStyles.viewCenter]}>
          <Text style={styles.txtShowAll}>Show All</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render = () => {
    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden />
        <View style={{ marginBottom: 10 }}>
          <FlatList
            horizontal
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
