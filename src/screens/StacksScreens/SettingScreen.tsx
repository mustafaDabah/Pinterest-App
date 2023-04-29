import { Text, View } from '../../darkMode/ThemeComponents';
import { SwitchTheme } from '../../components/UI';
import { styles } from './styles';

const SettingScreen = () => {
  return (
    <View style={styles.root}>
      <SwitchTheme />
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;
