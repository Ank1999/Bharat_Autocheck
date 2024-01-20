import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserProfile from '../components/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} size={22} color="black" />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16, // Set the font size
                        fontWeight: 'bold', // Set the font weight
                    },
                    // tabBarLabel: 'Custom Text', // Set the custom text for the tab
                }} />
            <Tab.Screen name="Profile" component={UserProfile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faUser} size={22} color="black" />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16, // Set the font size
                        fontWeight: 'bold', // Set the font weight
                    },
                    // tabBarLabel: 'Custom Text', // Set the custom text for the tab
                }} />
        </Tab.Navigator>
    );
}


export default BottomTabNavigator;