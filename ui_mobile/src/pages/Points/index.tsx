import React from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import MapContainer, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'

const Points = () => {

    const navigation = useNavigation()

    function handleNavBack() {
        navigation.goBack()
    }

    return (
        <>
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
                        coordinate={{
                            latitude: -15.7868392,
                            longitude: -47.8723759,
                        }}
                    />
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
        </>
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
      backgroundColor: '#34CB79',
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