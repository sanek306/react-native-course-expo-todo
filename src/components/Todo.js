import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppText } from './ui/AppText';

export const Todo = ({ todo, onRemove, openTodo }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5} 
            onPress={() => openTodo(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <AppText style={styles.text}>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
    },
    text: {
        fontSize: 20
    }
});
  