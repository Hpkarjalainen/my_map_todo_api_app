import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Pressable } from 'react-native';
import CustomStyles from '../CustomStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todos';

export default function TodoScreen() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      return AsyncStorage.getItem(STORAGE_KEY)
        .then(req => JSON.parse(req))
        .then(json => {
          if (json === null) {
            json = [];
          }
          setTodos(json);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const addTodo = () => {
    const newKey = String(todos.length);
    const object = { key: newKey, description: newTodo };
    const newTodos = [...todos, object];
    setTodos(newTodos);
    setNewTodo('');
    storeData(newTodos);
  }

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      setTodos([]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={CustomStyles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter new todo..."
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
        returnKeyType="done"
        onSubmitEditing={() => addTodo()}
      />
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => <Text>{item.description}</Text>}
      />
      <View style={CustomStyles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            CustomStyles.pressableButton,
            { backgroundColor: pressed ? '#2980b9' : '#3498db' },
          ]}
          onPress={clearData}
        >
          <Text style={CustomStyles.buttonText}>Clear stored data</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '80%',
    fontSize: 16,
    margin: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 10

  },
  list: {
    margin: 8,
  },
  
});
