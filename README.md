
# React Native Demo App

This is a simple React Native app that demonstrates various features and screens. The app includes the following screens:

1. **Home Screen**
   - The home screen serves as the starting point for the app.
   - It provides buttons to navigate to other screens.
   - Uses a consistent design for buttons with round edges and color changes on press.

2. **Map Screen**
   - The map screen displays a map using `react-native-maps`.
   - It uses the device's location to center the map.
   - Allows users to view their current position on the map.

3. **Random Facts Screen (Jokes)**
   - The random facts screen fetches and displays random jokes from a Chuck Norris jokes API.
   - It includes a button for getting a new joke with a color change on press.

4. **Todo Screen**
   - The todo screen allows users to create and manage a list of todos.
   - Users can add new todos and clear stored data.
   - The button style is consistent with the rest of the app.

## Screenshots

![Home Screen](/screenshots/screenshot1)
![Map Screen](/screenshots/screenshot1.png)
![Random Facts Screen](/screenshots/screenshot1.png)
![Todo Screen](/screenshots/screenshot1.png)

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
