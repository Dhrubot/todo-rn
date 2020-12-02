import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import TodoTask from './components/TodoTask'
import TodoInput from './components/TodoInput'


export default function App() {
  const [todoList, setTodoList] = useState([])

  const handleAddingTask = task => {
    setTodoList([...todoList, { key: Math.random().toString(), value: task }])
  }

  return (
    <View style={styles.mainContainer}>
      <TodoInput onAddTask={ handleAddingTask }/>
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
