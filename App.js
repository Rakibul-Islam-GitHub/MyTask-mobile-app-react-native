import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TaskList from './components/TaskList';

export default function App() {
  const [enteredTask, setEnteredTask]= useState('')
  const [task, setTask]= useState([])
  const handleTask=(enteredTask)=>{
    
    const result=  [...task, {key:Math.round().toString(),value:enteredTask} ]
     setTask(result)
    
    
  }
  return (
    <View style={styles.container}> 
      
      <View style={styles.inputContainer}>
      <TextInput onChangeText={(value)=>setEnteredTask(value)} style={{width:'80%', borderWidth:1, borderColor:'gray', padding:5}} autoCapitalized="words"   placeholder="Enter Task"></TextInput>
      <Button onPress={()=>handleTask(enteredTask)} title="Add"></Button>
      </View>

      <View >
        <FlatList data={task} renderItem={(itemlist)=>(
          <TaskList item={itemlist.item.value}/>
        )} />
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
  
});
