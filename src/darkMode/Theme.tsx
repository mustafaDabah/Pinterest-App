import { createContext, useContext, useState, useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeContextTypes | null>(null);

export const useDarkMode = (): DarkModeContextTypes => {
  const context = useContext(DarkModeContext);
  if (context === null) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useLayoutEffect(() => {
    async function loadDarkModeSetting() {
      const value = await AsyncStorage.getItem('darkMode');
      if (value !== null) {
        setIsDarkMode(JSON.parse(value));
      } else {
        setIsDarkMode(false);
      }
    }
    loadDarkModeSetting();
  }, []);

  const toggleMode = async () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    await AsyncStorage.setItem('darkMode', JSON.stringify(newValue));
  };

  const darkStyles = StyleSheet.create({
    headerBackground: {
      backgroundColor: isDarkMode ? '#2b2b37' : '#fff',
      borderTopWidth: 0,
    },
    headerTitle: {
      color: isDarkMode ? '#cbcbcb' : '#000',
      letterSpacing: 2,
      fontWeight: '100',
    },
    container: {
      backgroundColor: isDarkMode ? '#1c1e29' : '#f0efef',
    },
    text: {
      color: isDarkMode ? '#ffffff' : '#181818',
    },
  });

  return <DarkModeContext.Provider value={{ isDarkMode, darkStyles, toggleMode }}>{children}</DarkModeContext.Provider>;
};
