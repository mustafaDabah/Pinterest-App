import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import { DarkModeProvider } from '../darkMode/Theme';
import { StatusBar } from 'react-native';
import AuthNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Navigation = () => {
  // const [userToken, setUserToken] = useState(null);

  // const getUserToken = async () => {
  //   try {
  //     const usertTokenStorage = await AsyncStorage.getItem('userToken');
  //     setUserToken(usertTokenStorage);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useLayoutEffect(() => {
  //   getUserToken();
  // }, []);

  return (
    <NavigationContainer>
      <DarkModeProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
        {/* <AuthNavigator /> */}
      </DarkModeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
