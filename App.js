import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import SettingScreen from './screens/SettingScreen';

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Resources" component={ResourcesScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // add your custom styles here
});
