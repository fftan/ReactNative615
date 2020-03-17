import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },

  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
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
