import { View, Text, Switch  } from 'react-native';
import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';

const TextTest = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <View style={{ backgroundColor: isDarkMode ? '#333' : '#fff' }}>
      <TextTest style={{ color: isDarkMode ? '#fff' : '#333' }}>
        Hello, world!
      </TextTest>
    </View>
  );
};

export default TextTest;

export function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={{ backgroundColor: isDarkMode ? '#333' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#333' }}>Hello, world!</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
}
