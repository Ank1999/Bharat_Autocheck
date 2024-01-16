import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import VehicleDetails from '../components/VehicleDetails';

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
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width : '100%'
    }
})