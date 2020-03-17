import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { 
    flex: 1 
  },

  viewItem:{
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default {
  ...common,
};
