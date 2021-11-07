import React, {useState} from 'react';
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const TaskInput = ({handleTask}) => {
    const [enteredTask, setEnteredTask]= useState('')
    return (
        <View>
        <TextInput
        style={styles.inputContainer}
          onChangeText={(value) => setEnteredTask(value)}
          
          autoCapitalized="words"
          placeholder="Enter Task"
        ></TextInput>
        <TouchableOpacity onPress={() => handleTask(enteredTask)}>
          <View style={styles.btn}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Add Task</Text>
          </View>

        </TouchableOpacity>
        </View>
      
    );
};

const styles = StyleSheet.create({
    
    inputContainer:{
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    },
    btn:{
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#008080",
    color: "#ffffff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    
    }
    
  });

export default TaskInput;