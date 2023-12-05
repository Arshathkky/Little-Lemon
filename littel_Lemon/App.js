import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader'
import LittleLemonFooter from './Components/LittleLemonFooter';
import WelcomeScreen from './Components/WelcomeScreen';
import LoginScreen from './Components/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FeedbackForm from './Components/Feedback';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
    <>
      
      {
        <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>}
     
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});