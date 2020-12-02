import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
 
const TodoTask = props => {
    return (
        <TouchableOpacity onPress={ props.onDelete.bind(this, props.id) }>
            <View style={ styles.todoList }>
                <Text> { props.todo } </Text>
            </View>
        </TouchableOpacity>
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

