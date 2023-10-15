import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import TodoScreen from './screens/TodoScreen';
import RandomJokesScreen from './screens/RandomJokesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ title: "Home screen" }}
        />
        <Stack.Screen name="Map"
          component={MapScreen}
          options={{ title: "Map screen" }}
        />
        <Stack.Screen name="random"
          component={RandomJokesScreen}
          options={{ title: "Jokes screen" }}
        />
        <Stack.Screen name="todos"
          component={TodoScreen}
          options={{ title: "Todo screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


