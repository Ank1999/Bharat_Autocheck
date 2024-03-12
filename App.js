import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/Navigation/RootNavigation';
import BottomTabNavigator from './src/Navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/Global/CartContext';


export default function App() {
  return (
    <CartProvider>
      <RootNavigation />
    </CartProvider>
  );
}

const styles = StyleSheet.create({

});
