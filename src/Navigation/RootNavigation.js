import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import VehicleDetails from '../components/VehicleDetails';
import EstimationDetails from '../components/EstimationDetails';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import BottomTabNavigator from './BottomTabNavigation';
import PaymentMethod from '../components/PaymentMethod';
import Registration from '../components/Registration';

const Stack = createNativeStackNavigator();


export default function RootNavigation() {
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="HomeScreen" component={HomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="VehicleDetails" component={VehicleDetails}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="EstimationDetails" component={EstimationDetails}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="Login" component={Login}
                        options={{
                            headerShown: false
                        }}
                    />
                     <Stack.Screen name="Registration" component={Registration}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="UserProfile" component={UserProfile}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="PaymentMethod" component={PaymentMethod}
                        options={{
                            headerShown: true
                        }}
                    />
                    <Stack.Screen 
                        name="Main" 
                        component={BottomTabNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
})