import React from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import MapContainer, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'

const Points = () => {

    const navigation = useNavigation()

    function handleNavBack() {
        navigation.goBack()
    }

    function handleNavigateDetail() {
        navigation.navigate('Detail')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavBack}>
                    <Icon name="arrow-left" size={20} color="#4E6CA0" ></Icon>
                </TouchableOpacity>

                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.description}>
                    Check the map to find nearby disposal points.  
                </Text>

                <View style={styles.mapContainer}>
                    <MapContainer 
                        initialRegion={{
                            latitude: -15.7868392,
                            longitude: -47.8723759,
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                        }} 
                        style={styles.map}
                    >
                        <Marker
                            onPress={handleNavigateDetail}
                            style={styles.mapMarker} 
                            coordinate={{
                                latitude: -15.7868392,
                                longitude: -47.8723759,
                            }}
                        >   
                            <View style={styles.mapMarkerContainer}>
                                <Image 
                                    style={styles.mapMarkerImage} 
                                    source={{ uri: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=467&q=60' }}>
                                </Image>
                                <Text style={styles.mapMarkerTitle}>Market</Text>
                            </View>
                        </Marker>
                    </MapContainer>
                </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView horizontal
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://192.168.0.12:3333/uploads/lamps.svg"></SvgUri>
                        <Text style={styles.itemTitle}>Lamps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://192.168.0.12:3333/uploads/lamps.svg"></SvgUri>
                        <Text style={styles.itemTitle}>Lamps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://192.168.0.12:3333/uploads/lamps.svg"></SvgUri>
                        <Text style={styles.itemTitle}>Lamps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://192.168.0.12:3333/uploads/lamps.svg"></SvgUri>
                        <Text style={styles.itemTitle}>Lamps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://192.168.0.12:3333/uploads/lamps.svg"></SvgUri>
                        <Text style={styles.itemTitle}>Lamps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={42} height={42} uri="http://192.168.0.12:3333/uploads/lamps.svg"></SvgUri>
                        <Text style={styles.itemTitle}>Lamps</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Points

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto_400Regular',
    },
  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#4E6CA0',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto_400Regular',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });