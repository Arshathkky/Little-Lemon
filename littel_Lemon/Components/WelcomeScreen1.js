import React  from 'react'
import {Text,ScrollView,StyleSheet, Image} from 'react-native'
import MenuItems from './MenuItems';

const WelcomeScreen1 = () => {
   
    
  return (
    <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/Img/Logo.png')}
          resizeMode='center'
          accessibility={true}
          accessibilityLabel='Little lemon logo'
        />
        <Text style={styles.title}>
             Little Lemon, your local Mediterranean Bistro 
        </Text>
        <Image 
            style={styles.image}
            source={require('../assets/Img/Picture1.png')}
            resizeMode='cover'
            accessibility={true}
            accessibilityLabel='Picture 1'
          />
          <Image 
            style={styles.image}
            source={require('../assets/Img/Picture2.png')}
            resizeMode='cover'
            accessibility={true}
            accessibilityLabel='Picture 1'
          />
          <Image 
            style={styles.image}
            source={require('../assets/Img/Picture3.png')}
            resizeMode='cover'
            accessibility={true}
            accessibilityLabel='Picture 1'
          />
          <Image 
            style={styles.image}
            source={require('../assets/Img/Picture4.png')}
            resizeMode='cover'
            accessibility={true}
            accessibilityLabel='Picture 1'
          />
             
          
        
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    
    logo:{
      height:100,
      width:300
    },
    image: {
      width: 350,
      height: 250,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
  
    title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
export default WelcomeScreen1