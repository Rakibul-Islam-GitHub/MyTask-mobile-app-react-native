import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredTask, setEnteredTask]= useState('')
  const [task, setTask]= useState([])
  const handleTask=(enteredTask)=>{
    
    const result=  [...task, enteredTask ]
     setTask(result)
    
    
  }
  return (
    <View style={styles.container}> 
      
      <View style={styles.inputContainer}>
      <TextInput onChangeText={(value)=>setEnteredTask(value)} style={{width:'80%', borderWidth:1, borderColor:'gray', padding:5}} autoCapitalized="words"   placeholder="Enter Task"></TextInput>
      <Button onPress={()=>handleTask(enteredTask)} title="Add"></Button>
      </View>

      <View >
        {task.map((task)=>(
          <View key={task} style={styles.taskListContainer}><Text style={{color:'white', fontWeight:'bold',}} >{task}</Text></View>
        )
        )}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:60,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  taskListContainer:{
    backgroundColor:'chocolate',
    padding:15,
    marginVertical:6,
    
    
    
  }
});
