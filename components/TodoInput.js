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
        <Button title="Add" onPress={addTaskHandler} />
        <Button title="Cancel" onPress={addTaskHandler} />
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
});

export default TodoInput;
