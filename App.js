import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [todoTask, setTodoTask] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleInput = enteredText => {
    setTodoTask(enteredText)
  }

  const handleAdd = () => {
    setTodoList([...todoList, todoTask])
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer} >
        <TextInput
          placeholder='Things TO DO'
          style={styles.inputArea}
          onChangeText={ handleInput }
          value={ todoTask } 
        />
        <Button title='ADD' onPress={ handleAdd }/>
      </View>
      <ScrollView>
        { todoList.map(todo => <View key={todo} style={ styles.todoList }><Text> {todo} </Text></View> ) }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputArea: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  todoList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
  
});
