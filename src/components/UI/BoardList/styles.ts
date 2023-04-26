import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: { height: 200, overflow: 'scroll' },
  containerList: {
    flexDirection: 'row',
    alignContent: 'space-between',
    width: 320,
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    marginTop: 0,
    fontWeight: 'normal',
    marginLeft: 10,
  },
});
