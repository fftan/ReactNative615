import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    flexGrow: 1
  },
});

export const realmTest = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabBar: {
    backgroundColor: '#e84393',
    height: 70,
    justifyContent: 'center',
    width: '100%',
  },

  btnAdd: {
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    marginRight: 20,
  },

  viewForm: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: '#bbbbbb',
    paddingHorizontal: 12,
    width: '60%',
    marginBottom: 20,
    height: 60
  },

  btnSubmit: {
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b894',
    borderRadius: 5
  }
})

export default {
  ...common,
};
