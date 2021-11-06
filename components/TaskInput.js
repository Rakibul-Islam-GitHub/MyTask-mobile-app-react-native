import React, {useState} from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';

const TaskInput = ({handleTask}) => {
    const [enteredTask, setEnteredTask]= useState('')
    return (
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setEnteredTask(value)}
          style={{
            width: "80%",
            borderWidth: 1,
            borderColor: "gray",
            padding: 5,
          }}
          autoCapitalized="words"
          placeholder="Enter Task"
        ></TextInput>
        <Button onPress={() => handleTask(enteredTask)} title="Add"></Button>
      </View>
    );
};

const styles = StyleSheet.create({
    
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    
  });

export default TaskInput;