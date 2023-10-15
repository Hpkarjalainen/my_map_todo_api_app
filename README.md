
# React Native Demo App

This is a simple React Native app that demonstrates various features and screens. The app includes the following screens:

1. **Home Screen**
   - The home screen serves as the starting point for the app.
   - It provides buttons to navigate to other screens.
   - Uses a consistent design for buttons with round edges and color changes on press.

2. **Map Screen**
   - The map screen displays a map using `react-native-maps`.
   - Allows users to view their current position on the map.
   - Location is retrieved when the component mounts using useEffect.

3. **Jokes Screen**
   - The jokes screen fetches and displays jokes from a Chuck Norris [Jokes API](https://api.chucknorris.io/jokes/random).
   - It includes a button for getting a new joke with a color change on press.

4. **Todo Screen**
   - The todo screen allows users to create a list of todos.
   - Todos are stored using react native async storage-library
   - Users can add new todos and clear stored data.
   - The button style is consistent with the rest of the app.

The App component serves as the entry point for the app and sets up navigation using React Navigation. It defines different screens that users can navigate to.
CustomStyles.js is used to apply styling to the app.

## Screenshots

<div style="display: flex; margin-bottom: 20px;">
  <img src="/Screenshots/HomeScreen.jpg" alt="Home Screen" style="margin-right: 20px;" width="200" />
  <img src="/Screenshots/MapScreen.jpg" alt="Map Screen" style="margin-right: 20px;" width="200" />
  <img src="/Screenshots/JokesScreen.jpg" alt="Jokes Screen" style="margin-right: 20px;" width="200" />
  <img src="/Screenshots/TodoScreen.jpg" alt="Todo Screen" width="200" />
</div>

## Usage

To use this app, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Start the app using `npm start` or `expo start`.
4. You can run the app on an emulator or a physical device using Expo.
5. Explore the different screens by navigating using the buttons on the home screen.

## Dependencies

- React Native
- React Navigation
- Expo
- react-native-maps
- @react-native-async-storage/async-storage

## Source

This app was developed as part of a learning project. You can watch the tutorial on how to create react stack navigation on YouTube: [Tutorial Video](https://youtu.be/EYndFNKgpTA?si=xxFR9LW8kf_PFsut). Youtuber: MissCoding
