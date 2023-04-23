import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Routes } from '../constants';
import { useDarkMode } from '../darkMode/Theme';
import { CreatePinScreen, HomeScreen, ProfileScreen } from '../screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  const { darkStyles } = useDarkMode();

  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME_TAB}
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 9 },
        tabBarItemStyle: { height: 55 },
        tabBarStyle: darkStyles.headerBackground,
        tabBarInactiveTintColor: darkStyles.text.color,
        tabBarActiveTintColor: '#b8001c',
      }}>
      <Tab.Screen
        name={Routes.HOME_TAB}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.CREATE_PIN_TAB}
        component={CreatePinScreen}
        options={{
          title: 'Create Pin',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE_TAB}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
