import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TodoInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Things TO DO"
        style={styles.inputArea}
        onChangeText={handleInput}
        value={todoTask}
      />
      <Button title="ADD" onPress={ handleAdd } />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputArea: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default TodoInput;
