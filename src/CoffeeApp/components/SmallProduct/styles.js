import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageStyle: {
    height: 70,
    width: 70, 
    marginRight: 20,
  },

  textStyle: {
    fontSize: 16,
    color: '#000',
  }
});

export default {
  ...common,
};
