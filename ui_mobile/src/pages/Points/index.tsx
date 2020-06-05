import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native'
import MapContainer, { Marker } from 'react-native-maps'
import { SvgUri } from 'react-native-svg'
import * as Location from 'expo-location'

import api from '../../services/api'

interface Item {
  id: number
  title: string
  image_url: string
}

interface Points {
  id: number
  name: string
  image: string
  latitude: number
  longitude: number
}

const Points = () => {

    const [items, setItems] = useState<Item[]>([])
    const [points, setPoints] = useState<Points[]>([])
    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])

    const navigation = useNavigation()

    useEffect(() => {
      async function loadPosition() {
        const { status } = await Location.requestPermissionsAsync()

        if (status !== 'granted') {
          Alert.alert('Alert', 'Your location permission is necessary')
          return 
        }

        const location = await Location.getCurrentPositionAsync()

        const { latitude, longitude } = location.coords

        setInitialPosition([
          latitude,
          longitude
        ])
      }
      loadPosition()
    }, [])

    useEffect(() => {
      api.get('items').then(response => {
        setItems(response.data)
      })
    }, [])

    useEffect(() => {
      api.get('points', {
        params: {
          city: "Brasília",
          uf: "DF",
          items: 5
        }
      }).then(response => {
        setPoints(response.data)
      })
    }, [])

    function handleNavBack() {
        navigation.goBack()
    }

    function handleNavigateDetail(id: number) {
        navigation.navigate('Detail', { point_id: id })
    }

    function handleSelectItem(id: number) {
      const alreadySelected = selectedItems.findIndex(item => item === id)

      if (alreadySelected >= 0) {
          const filteredItems = selectedItems.filter(item => item !== id)
          setSelectedItems(filteredItems)
      } else {
          setSelectedItems([ ...selectedItems, id ])
      }
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
                    {
                      initialPosition[0] !== 0 && (

                        <MapContainer 
                          initialRegion={{
                              latitude: initialPosition[0],
                              longitude: initialPosition[1],
                              latitudeDelta: 0.014,
                              longitudeDelta: 0.014
                          }} 
                          style={styles.map}
                        >
                          {
                            points.map(point => (
                                <Marker
                                  key={String(point.id)}
                                  style={styles.mapMarker} 
                                  onPress={() => handleNavigateDetail(point.id)}
                                  coordinate={{
                                      latitude: point.latitude,
                                      longitude: point.longitude,
                                  }}
                                  >   
                                  <View style={styles.mapMarkerContainer}>
                                      <Image 
                                          style={styles.mapMarkerImage} 
                                          source={{ uri: point.image }}>
                                      </Image>
                                      <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                                  </View>
                              </Marker>
                            ))

                          }
                      </MapContainer>

                      )
                    }
                </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView horizontal
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                  { items.map(item => (
                      <TouchableOpacity 
                        key={item.id} 
                        style={[
                          styles.item,
                          selectedItems.includes(item.id) ? styles.selectedItem : {}
                        ]} 
                        activeOpacity={0.7}
                        onPress={() => handleSelectItem(item.id)} 
                      >
                        <SvgUri width={42} height={42} uri={item.image_url}></SvgUri>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
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
      borderColor: '#4E6CA0',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });