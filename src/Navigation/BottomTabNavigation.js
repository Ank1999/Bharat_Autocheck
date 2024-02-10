import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../components/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true, // Display tab labels
                tabBarLabelStyle: {
                    fontSize: 16, // Font size for tab labels
                    fontWeight: 'bold', // Font weight for tab labels
                    color: 'black', // Color for tab labels
                    top: 10, // Adjust the position of tab labels
                },
                tabBarStyle: [
                    {
                        display: 'flex', // Display the tab bar container as flex
                        backgroundColor:'#f0f0f0'
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
                    tabBarLabel: 'Profile', // Tab label for the "Profile" screen

                }}
            />
        </Tab.Navigator>

    );
}


const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'cyan', // Background color for the tab bar container
        borderTopWidth: 1, // Add a top border
        borderTopColor: '#ccc', // Border color
        paddingBottom: 5, // Add some padding at the bottom
    },
    tabBarIcon: {
        marginBottom: -3, // Adjust the icon's position vertically
        top: 10
    },
    tabBarActiveColor: {
        color: '#007bff', // Color for active tab icons
    },
    tabBarInactiveColor: {
        color: 'black', // Color for inactive tab icons
    },
    tabLabel: {
        fontSize: 16, // Font size for tab labels
        fontWeight: 'bold', // Font weight for tab labels
        color: 'black', // Color for tab labels
        top: 10

    },
});

export default BottomTabNavigator;
