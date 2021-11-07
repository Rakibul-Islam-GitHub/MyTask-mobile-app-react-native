import React, {useState} from 'react';
import {  TextInput, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const TaskInput = ({handleTask}) => {
    const [enteredTask, setEnteredTask]= useState('')
    const handleEnteredTask=()=>{
      if (enteredTask === "") {
        alert("Please Enter a Task");
      } else {
        handleTask(enteredTask);
        setEnteredTask("");
      }
      
    }
    return (
        <View>
        <TextInput
        style={styles.inputContainer}
          onChangeText={(value) => setEnteredTask(value)}
          value={enteredTask}
          autoCapitalized="words"
          placeholder="Enter Task"
        ></TextInput>
        <TouchableOpacity onPress={ handleEnteredTask }>
          <View style={styles.btn}>
          <MaterialIcons
              style={{ marginRight: 5, color: "#f1c40f" }}
              name='assignment'
              size={22}
              
            />
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
    backgroundColor: "#b71540",
    color: "#ffffff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    
    }
    
  });

export default TaskInput;