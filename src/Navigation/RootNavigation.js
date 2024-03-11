import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import VehicleDetails from '../components/VehicleDetails';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import BottomTabNavigator from './BottomTabNavigation';
import PaymentMethod from '../components/PaymentMethod';
import Registration from '../components/Registration';
import Brand from '../Global/Brand';
import SplashScreen from '../screens/SplashScreen';
import VehicleCart from '../components/VehicleCart';
import DetailScreen from '../components/DetailsScreen';
import CategoryScreen from '../components/CategoryScreen';
import PaymentScreen from '../components/PaymentScreen';
import DateTimeScreen from '../components/DateTimeScreen';
import LoginScreen from '../components/LoginScreen';
import LocationScreen from '../components/LocationScreen';

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
                    <Stack.Screen name="DateTimeScreen" component={DateTimeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="Login" component={Login}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="LoginScreen" component={LoginScreen}
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
                    <Stack.Screen name="Brand" component={Brand}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="BottomTab"
                        component={BottomTabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="VehicleCart"
                        component={VehicleCart}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DetailScreen"
                        component={DetailScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="CategoryScreen"
                        component={CategoryScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="PaymentScreen"
                        component={PaymentScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="LocationScreen"
                        component={LocationScreen}
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