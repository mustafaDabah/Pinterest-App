import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes, { type RootStackParamList } from '../constants/Routes';
import { PinScreen, SettingScreen } from '../screens';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name={Routes.ROOT_TAB} component={Tabs} />
      <Stack.Screen name={Routes.PIN_SCREEN} component={PinScreen} />
      <Stack.Screen
        name={Routes.SETTINGS_SCREEN}
        options={{
          headerShown: true,
        }}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
