import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import CustomStyles from '../CustomStyles';

const URL = 'https://api.chucknorris.io/jokes/random';

export default function RandomJokesScreen() {
  useEffect(() => {
    fetchNewJoke();
  }, []);

  const [joke, setJoke] = useState(null);

  const fetchNewJoke = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setJoke(json.value);
      });
  };

  return (
    <View style={CustomStyles.container}>
      <Text style={CustomStyles.jokeText}>{joke}</Text>
      <View style={CustomStyles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            CustomStyles.pressableButton,
            { backgroundColor: pressed ? '#2980b9' : '#3498db' },
          ]}
          onPress={fetchNewJoke}
        >
          <Text style={CustomStyles.buttonText}>Get a new joke</Text>
        </Pressable>
      </View>
    </View>
  );
}


