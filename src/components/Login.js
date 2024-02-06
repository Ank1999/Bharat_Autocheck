import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import profile from "../../assets/Profile.png";


export default function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // navigation.navigate('HomeScreen');
    navigation.navigate('BottomTab');
  };

  const handleRegistration = () => {
    navigation.navigate('Registration');
  }

  return (
    // <ScrollView contentContainerStyle={styles.containerS}>
    // {/* Login Form */}
    <View style={styles.container}>
      <Text style={styles.header}>Login here</Text>
      <Text style={styles.subheader}>Welcome back you’ve been missed!</Text>

      <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.newAccountSection}>
        <TouchableOpacity onPress={handleRegistration}>
          <Text style={styles.createAccountText}>Create new account</Text>
        </TouchableOpacity>
        <Text style={styles.orContinueWithText}>Or continue with</Text>
        <View style={styles.socialIcons}>
          <View style={styles.iconContainer}>
            <AntDesign name="google" size={24} color="black" />
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="facebook" size={24} color="black" />
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="apple1" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f7',
    // marginTop: 200
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    bottom: 10,
    color: '#000',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    bottom: 0,
  },
  input: {
    width: '100%',
    height: 60,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e4e4e7',
    borderRadius: 10,
    backgroundColor: '#fff',
    top: 70
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end'
  },
  forgotPassword: {
    marginBottom: 20,
    marginTop: 20,
    color: '#6c6c6c',
    top: 45
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    top: 40
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  newAccountSection: {
    width: '100%',
    alignItems: 'center',
    top: 80
  },

  createAccountText: {
    color: '#007bff',
    // top: 80

  },
  orContinueWithText: {
    marginVertical: 10,
    color: '#6c6c6c',
    top: 10
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // Add any other styling you need for this container
  },
  iconContainer: {
    backgroundColor: 'cyan',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    top: 30
  },
});
