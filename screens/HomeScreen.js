import React from 'react';
import { Text, View, Pressable } from 'react-native';
import CustomStyles from '../CustomStyles';

export default function HomeScreen({ navigation }) {
    const buttonColor = '#3498db'; // Common color for all buttons
    const pressedButtonColor = '#2980b9'; 

    return (
        <View style={CustomStyles.container}>
            <View style={CustomStyles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        CustomStyles.pressableButton,
                        { backgroundColor: pressed ? pressedButtonColor : buttonColor },
                    ]}
                    onPress={() => navigation.navigate('Map')}
                >
                    <Text style={CustomStyles.buttonText}>Map</Text>
                </Pressable>
            </View>
            <View style={CustomStyles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        CustomStyles.pressableButton,
                        { backgroundColor: pressed ? pressedButtonColor : buttonColor },
                    ]}
                    onPress={() => navigation.navigate('random')}
                >
                    <Text style={CustomStyles.buttonText}>Jokes</Text>
                </Pressable>
            </View>
            <View style={CustomStyles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        CustomStyles.pressableButton,
                        { backgroundColor: pressed ? pressedButtonColor : buttonColor },
                    ]}
                    onPress={() => navigation.navigate('todos')}
                >
                    <Text style={CustomStyles.buttonText}>Todos</Text>
                </Pressable>
            </View>
        </View>
    );
}