import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '../constants/Routes';
import { LoginScreen, PinScreen, SettingScreen, SignupScreen } from '../screens';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignupScreen} />

      <Stack.Screen
        name={Routes.ROOT_TAB}
        component={Tabs}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name={Routes.PIN_SCREEN} component={PinScreen} />
      <Stack.Screen name={Routes.SETTINGS_SCREEN} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
