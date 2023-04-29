import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // SETTINGS SCREEN
  root: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },

  // PIN SCREEN
  safeAreaStyle: {
    backgroundColor: '#000',
  },
  rootPin: {
    height: '100%',
    // backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 35,
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: '#444',
    borderRadius: 50,
  },
});
