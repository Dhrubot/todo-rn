import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import TodoTask from './components/TodoTask'
import TodoInput from './components/TodoInput'


export default function App() {
  const [todoList, setTodoList] = useState([])
  const [modalState, setModalState] = useState(false)

  const handleAddingTask = task => {
    setTodoList( todoList => [...todoList, { key: Math.random().toString(), value: task }])
    setModalState(false)
  }

  const handleRemoveTask = taskId => {
    setTodoList( todoList => {
      return todoList.filter(task => task.key !== taskId)
    })
  }

  return (
    <View style={styles.mainContainer}>
      <Button title='Add New ToDo' onPress={() => setModalState(true)} />
      <TodoInput onAddTask={ handleAddingTask } visible={ modalState } />
      <FlatList data={ todoList } renderItem={ itemData => (
        <TodoTask id={ itemData.item.key } todo={ itemData.item.value } onDelete={ handleRemoveTask } />
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    padding: 50
  },
});
