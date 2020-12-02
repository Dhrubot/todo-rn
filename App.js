import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import TodoTask from './components/TodoTask'


export default function App() {
  const [todoTask, setTodoTask] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleInput = enteredText => {
    setTodoTask(enteredText)
  }

  const handleAdd = () => {
    setTodoList([...todoList, { key: Math.random().toString(), value: todoTask }])
  }

  return (
    <View style={styles.mainContainer}>

      <FlatList data={ todoList } renderItem={ itemData => (
        <TodoTask todo={ itemData.item.value }/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    padding: 50
  },
});
