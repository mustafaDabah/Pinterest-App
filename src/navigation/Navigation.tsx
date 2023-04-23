import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import { DarkModeProvider } from '../darkMode/Theme';
import { StatusBar } from 'react-native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <DarkModeProvider>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </DarkModeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
