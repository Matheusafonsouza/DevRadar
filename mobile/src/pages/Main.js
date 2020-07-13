import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'; 
import { MaterialIcons } from '@expo/vector-icons';

export default function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        async function loadInitalPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInitalPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <>
            <MapView 
                style={styles.map}
                initialRegion={currentRegion}
            >
                <Marker coordinate={{ latitude: -15.9840809, longitude: -47.9911217}}>
                    <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/42722634?s=460&u=4c1088c0c5e646a2f32e49e0e8d5c1649398377b&v=4" }} />
                    <Callout onPress={() => {
                        navigation.navigate('Profile', { github_username: 'matheusafonsouza' })
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName} >Matheus Afonso</Text>
                            <Text style={styles.devBio} >Biografia de teste uau</Text>
                            <Text style={styles.devTechs} >ReactJS, React Native, NodeJS</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.searchForm}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                <TouchableOpacity 
                    style={styles.loadButton}
                    onPress={() => {}}
                >
                    <MaterialIcons name="my-location" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff',
    },

    callout: {
        width: 260,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    loadButton: {
        height: 50,
        width: 50,
        backgroundColor: '#8e4fdd',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
        
    }
});