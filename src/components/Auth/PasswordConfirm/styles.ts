import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
  },
  passwordToggle: {
    padding: 8,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
