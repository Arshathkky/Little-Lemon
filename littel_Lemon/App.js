import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader'
import LittleLemonFooter from './Components/LittleLemonFooter';
import MenuItems from './Components/MenuItem';
import WelcomeScreen from './Components/WelcomeScreen';
import LoginScreen from './Components/LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader></LittleLemonHeader>
        <LoginScreen></LoginScreen>
        {/* <WelcomeScreen/>
        <MenuItems/>  */}
      </View>
      <View style={styles.footerContainer}>
         <LittleLemonFooter /> 
      </View>
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