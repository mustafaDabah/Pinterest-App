import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // PROFILE SCREEN
  container: {
    width: '100%',
  },

  //   CREATE TAP SCREEN
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 5,
    width: '100%',
    borderRadius: 5,
  },
});
