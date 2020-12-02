import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
const TodoTask = props => {
    return (
        <View style={ styles.todoList }>
            <Text> { props.todo } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todoList: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
})

export default TodoTask

