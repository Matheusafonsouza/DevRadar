import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'; 

export default function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

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
        <MapView 
            style={styles.map}
            initialRegion={currentRegion}
        >
            <Marker coordinate={{ latitude: -15.9840809, longitude: -47.9911217}}>
                <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/42722634?s=460&u=4c1088c0c5e646a2f32e49e0e8d5c1649398377b&v=4" }} />
                <Callout>
                    <View style={styles.callout}>
                        <Text style={styles.devName} >Matheus Afonso</Text>
                        <Text style={styles.devBio} >Biografia de teste uau</Text>
                        <Text style={styles.devTechs} >ReactJS, React Native, NodeJS</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
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
});