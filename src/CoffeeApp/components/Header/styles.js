import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: '#fff',
  },

  leftTabBar: {
    flex: 1,
  },

  rightTabBar: {
    flex: 1,
    alignItems: 'flex-end',
  }
});

export default {
  ...common,
};
