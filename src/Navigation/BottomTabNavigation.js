import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../components/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';
import VehicleCart from '../components/VehicleCart';
import DetailScreen from '../components/DetailsScreen';
import OrderScreen from '../components/OrderScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true, // Display tab labels
                tabBarLabelStyle: {
                    fontSize: 16, // Font size for tab labels
                    fontWeight: 'bold', // Font weight for tab labels
                    color: 'black', 
                    top:3
                },
                tabBarStyle: [
                    {
                        display: 'flex', // Display the tab bar container as flex
                        // backgroundColor: '#f0f0f0'
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon
                            icon={faHome}
                            size={22}
                            style={[
                                styles.tabBarIcon,
                                focused ? styles.tabBarActiveColor : styles.tabBarInactiveColor,
                            ]}
                        />
                    ),
                    tabBarLabel: 'Home', // Tab label for the "Home" screen
                }}
            />

            <Tab.Screen
                name="Orders"
                component={OrderScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            size={22}
                            style={[
                                styles.tabBarIcon,
                                focused ? styles.tabBarActiveColor : styles.tabBarInactiveColor,
                            ]}
                        />
                    ),
                    tabBarLabel: 'My Orders', // Tab label for the "Profile" screen

                }}
            />

            <Tab.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon
                            icon={faUser}
                            size={22}
                            style={[
                                styles.tabBarIcon,
                                focused ? styles.tabBarActiveColor : styles.tabBarInactiveColor,
                            ]}
                        />
                    ),
                    tabBarLabel: 'Account', // Tab label for the "Profile" screen

                }}
            />

        </Tab.Navigator>

    );
}


const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#4a6fa5', 
        borderTopWidth: 1, 
        borderTopColor: '#ccc', 
       
    },
    tabBarIcon: {
        marginBottom: -3,
       
    },
    tabBarActiveColor: {
        color: '#007bff', 
    },
    tabBarInactiveColor: {
        color: 'black', 
    },
    tabLabel: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: 'black', 
    },
});

export default BottomTabNavigator;
