import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {

  const [task, setTask]= useState([])
  const handleTask=(enteredTask)=>{
    
    const result=  [...task, {key:Math.random().toString(),value:enteredTask} ]
     setTask(result)
    
    
  }
  const removeTask=(idkey)=>{
    
    const taskAfterRemove= task.filter(task=> task.key!= idkey)
    setTask(taskAfterRemove)
  }
  return (
    <View style={styles.container}> 
      
      <TaskInput handleTask={handleTask}/>

      <View style={{flex: 1, marginTop:20}} >
        <FlatList  data={task} renderItem={(itemlist)=>(
          <TaskList idkey={itemlist.item.key} item={itemlist.item.value} removeTask={removeTask}/>
        )} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#E8EAED",
    height:'100%'
  },
  
  
});
