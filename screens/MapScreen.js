import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import CustomStyles from '../CustomStyles';

export default function MapScreen() {
    const [marker, setMarker] = useState(null)
    const [location, setLocation] = useState({ /* Show map of Finland when MapScreen-component mounts */
        latitude: 64,
        longitude: 26,
        latitudeDelta: 12,
        longitudeDelta: 12,
    })

    useEffect(() => {
        getUserPosition();
    }, []);

    const getUserPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        console.log(status)
        try {
            if (status !== 'granted') {
                console.log("Not granted")
                return
            }
            const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
            setLocation({ ...location, "latitude": position.coords.latitude, "longitude": position.coords.longitude })
            setMarker(position.coords)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <MapView
            style={CustomStyles.map}
            initialRegion={location}
        >
            {
                marker &&
                <Marker
                    title='My position'
                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} />
            }
        </MapView>
    )
}

