import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const TodoInput = (props) => {
  const [todoTask, setTodoTask] = useState("");

  const handleInput = (enteredText) => {
    setTodoTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(todoTask)
    setTodoTask('')
  }

  return (
    <Modal visible={ props.visible } animationType='slide' >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Things TO DO"
          style={styles.inputArea}
          onChangeText={handleInput}
          value={todoTask}
        />
        <View style={ styles.buttonContainer} >
          <View style={ styles.button }>
            <Button title="ADD" onPress={addTaskHandler} />
          </View>
          <View style={ styles.button }>
            <Button title="CANCEL" color='red' onPress={ props.onCancel } />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputArea: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default TodoInput;
