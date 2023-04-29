import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
const imgLogin = require('../../assets/images/login.png');

const LoginScreen = () => {
  return (
    <View style={styles.loginContainer}>
      <Image source={imgLogin} style={styles.img} />
      <Text>Log-in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '50%',
  },
});

export default LoginScreen;
