import React from 'react'
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

const Detail = () => {

    const navigation = useNavigation()

    function handleNavBack() {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavBack}>
                    <Icon name="arrow-left" size={20} color="#4E6CA0" ></Icon>
                </TouchableOpacity>

                <Image style={styles.pointImage} source={{ uri: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=467&q=60' }}></Image>

                <Text style={styles.pointName}>Mercado do Jorge</Text>
                <Text style={styles.pointItems}>Mercado do Jorge</Text>

                <View style={styles.address}>
                    <Text style={styles.addressTitle}>
                        Endereço
                    </Text>
                    <Text style={styles.addressContent}>
                        Brasília, DF     
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <RectButton 
                    style={styles.button}
                    onPress={() => {}}
                >
                    <FontAwesome name="whatsapp" size={20} color="#FFF"/>
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>

                <RectButton 
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Icon name="mail" size={20} color="#FFF"/>
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 20,
    },
  
    pointImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#322153',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    pointItems: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: 'Roboto_400Regular',
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#4E6CA0',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
    },
  });

export default Detail