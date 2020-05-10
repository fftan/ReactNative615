import { StyleSheet, Dimensions } from 'react-native';

const sizeScreen = Dimensions.get('window');

const common = StyleSheet.create({
  btnOptions: {
    width: sizeScreen.width - 24,
    height: 50,
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#b2bec3',
    marginBottom: 15,
  },

  viewOption: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  btnOption: {
    height: 30,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginHorizontal: 12,
    backgroundColor: '#dfe6e9',
    marginBottom: 12,
  },

  btnSubmitOption: {
    backgroundColor: '#d63031',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  }
});

export default {
  ...common,
};
