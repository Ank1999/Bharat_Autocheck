// BottomNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../components/UserProfile';
import VehicleDetails from '../components/VehicleDetails';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={UserProfile} />
      <Tab.Screen name="Vehicle Detail" component={VehicleDetails} />
      <Tab.Screen name="Test2" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
