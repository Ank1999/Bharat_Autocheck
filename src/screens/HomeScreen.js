import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style = {styles.container}>
      <Text>Welcome to Bharat AutoCheck</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:'red',
        height:'100%'
    }
})