import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    zIndex: 33,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  overlay: { backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, zIndex: 1 },
  textContainer: {
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomColor: '#a3a3a3',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  textStyle: {
    textAlign: 'center',
  },
  btnCreateNewBoard: {
    borderTopColor: '#a3a3a3',
    paddingTop: 15,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    // position: 'absolute',
    bottom: 0,
    width: 320,
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
