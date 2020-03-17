import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  h2: {
    fontSize: 20,
    fontWeight: '600',
  },

  h3: {
    fontSize: 16,
    fontWeight: '500',
  },

  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonOfList: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
});

export default {
  ...common,
};
