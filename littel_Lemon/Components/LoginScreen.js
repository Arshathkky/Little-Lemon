import React, { useState } from 'react'
import { View ,Text ,StyleSheet, TextInput} from 'react-native'

const LoginScreen = () => {
    const [email, onChangeEmail] =useState('');
    const [password, onChangePassword] =useState('');

  return (
    <View>
        <Text style={loginScreen.Headertext}> Welcome to the little Lemon </Text>
        <Text style={loginScreen.regularText}> Login to continue</Text>
        <TextInput
            style={loginScreen.textbox}
            value={email}
            onChange={onChangeEmail}
            placeholder={'email'} 
            keyboardType={'email-address'}
            >

        </TextInput>
        <TextInput
            style={loginScreen.textbox}
            value={password}
            onChange={onChangePassword}
            placeholder={'Password'} 
            keyboardType={'default'}
            secureTextEntry={true}
            >

        </TextInput>
    </View>
  )
}
const loginScreen = StyleSheet.create(
    {
        container:{
            flex:1
        },
        Headertext:{
            padding: 40,
            fontSize: 30,
            color: '#EDEFEE',
            textAlign: 'center',
        },
        regularText: {
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
          },
          textbox:{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 16,
            borderColor: '#EDEFEE',
            backgroundColor: '#EDEFEE',
          }

    }
)

export default LoginScreen