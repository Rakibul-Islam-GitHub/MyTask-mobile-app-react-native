import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {

  const [task, setTask]= useState([])
  const handleTask=(enteredTask)=>{
    
    const result=  [...task, {key:Math.round().toString(),value:enteredTask} ]
     setTask(result)
    
    
  }
  return (
    <View style={styles.container}> 
      
      <TaskInput handleTask={handleTask}/>

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
  
  
});
