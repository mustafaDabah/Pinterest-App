import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    zIndex: 33,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 40,
    width: 330,
    overflow: 'hidden',
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    borderBottomColor: '#a3a3a3',
    borderBottomWidth: 0.5,
  },
  input: {
    height: 40,
    marginVertical: 25,
    borderWidth: 1,
    borderColor: '#a3a3a3',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
  btnCreateNewBoard: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8001c',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
});
