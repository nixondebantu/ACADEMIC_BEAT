import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import NavHeader from './components/NavHeader';
import ContactScreen from './screens/ContactScreen';
import ExamScreen from './screens/ExamScreen';
import HomeScreen from './screens/HomeScreen';
import NoticeScreen from './screens/NoticeScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notice" component={NoticeScreen} />
      <Stack.Screen name="Exam & HW" component={ExamScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarLabel: route.name,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Resources') {
              iconName = 'book';
            } else if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings-sharp';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        sceneContainerStyle={{
          backgroundColor: 'white',
        }}
      >
        <Tab.Screen name="Resources" options={{ headerTitle: (props) => <NavHeader />,headerTitleAlign: 'center',}} component={ResourcesScreen} />
        <Tab.Screen name="Home" options={{ headerTitle: (props) => <NavHeader />,headerTitleAlign: 'center',}} component={HomeStack} />
        <Tab.Screen name="Settings" options={{ headerTitle: (props) => <NavHeader />,headerTitleAlign: 'center',}} component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // add your custom styles here
});
