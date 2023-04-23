import { Switch } from 'react-native';
import { useDarkMode } from '../../../darkMode/Theme';
import { Text, View } from '../../../darkMode/ThemeComponents';
import { styles } from './styles';

const SwitchTheme = () => {
  const { isDarkMode, toggleMode } = useDarkMode();

  return (
    <View style={styles.container}>
      <Text> Change The Theme</Text>
      <Switch value={isDarkMode} onValueChange={toggleMode} />
    </View>
  );
};

export default SwitchTheme;
