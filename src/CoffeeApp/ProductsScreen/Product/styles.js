import { StyleSheet, Dimensions } from 'react-native';

const sizeScreen = Dimensions.get('window');

const common = StyleSheet.create({
  container: {
    flex: 1
  },

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
});

export default {
  ...common,
};
