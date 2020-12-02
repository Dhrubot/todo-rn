import React from 'react'

const TodoTask = props => {
    return (
        <View style={ styles.todoList }>
            <Text> { props.item.value } </Text>
        </View>
    )
}

export default TodoTask
