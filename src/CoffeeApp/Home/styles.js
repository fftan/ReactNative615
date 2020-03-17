import { StyleSheet, Dimensions } from 'react-native';

const sizeScreen = Dimensions.get('window');

const common = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },

  containerSlide: {
    width: sizeScreen.width,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnSlidePrev: {
    alignSelf: 'flex-start',
    height: 50,
    width: 50,
  },

  btnSlideNext: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
  },

  viewBtnSlide: {
    flex: 1,
  },

  icSlide: {
    color: '#000',
    opacity: 0.3,
    fontSize: 40,
  },

  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 12,
  },

  btnShowAll: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fdcb6e',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },

  txtShowAll: {
    fontSize: 14,
    color: '#fdcb6e',
  }
});

export default {
  ...common,
};
