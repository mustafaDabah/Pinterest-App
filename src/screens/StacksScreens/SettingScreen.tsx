import { StyleSheet } from 'react-native';
import { Text, View } from '../../darkMode/ThemeComponents';
import { SwitchTheme } from '../../components/UI';

const SettingScreen = () => {
  return (
    <View style={styles.root}>
      <SwitchTheme />
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
});
