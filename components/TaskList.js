import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const TaskList = (props) => {
    return (
        <View key={props.item} style={styles.taskListContainer}><Text style={{color:'white', fontWeight:'bold',}} >{props.item}</Text></View>
    );


   
};

const styles = StyleSheet.create({
    taskListContainer:{
        backgroundColor:'chocolate',
        padding:15,
        marginVertical:6,
      },
      
})

export default TaskList;