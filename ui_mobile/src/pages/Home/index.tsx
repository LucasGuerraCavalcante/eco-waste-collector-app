import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation()

    function handleNavToPoints() {
      navigation.navigate('Points')
    }

    return (
        <ImageBackground 
            style={styles.container} 
            source={require('../../assets/home-background.png')} 
        >
            <View style={styles.main}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/logo.png')} style={{height: 40, width: 40}}/>
                    <Text style={styles.description}>Ecological Management</Text>
                </View>
                <Text style={styles.title}>Garbage Management Marketplace</Text>
                <Text style={styles.description}>Helping people to find ecological and efficient waste disposal points.</Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleNavToPoints}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color="#FFF" size={20} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Enter
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding:32,
    },

    logo: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#3d3944',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 50,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#4E6CA0',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
});

export default Home