import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes, { type AuthStackParamList } from '../constants/Routes';
import { LoginScreen, SignupScreen } from '../screens';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
