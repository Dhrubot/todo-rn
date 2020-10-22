import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer} >
        <TextInput
          placeholder='Things TO DO'
          style={styles.inputArea}
        />
        <Button title='ADD' />
      </View>
      <View>

      </View>
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
  }
});
