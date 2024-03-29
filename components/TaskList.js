import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

const TaskList = (props) => {
    return (
      <View  style={styles.itemWrapper}>
          <View  style={styles.taskListContainer}>
           <MaterialIcons
              style={{ marginRight: 5, color: "#78e08f" }}
              name='visibility'
              size={22}
              
            />
        <Text  style={{ color: "white", maxWidth:'90%', fontWeight: "bold", textTransform:'capitalize' }}>{props.item}</Text>

        
      </View>
      <MaterialIcons
        name='delete'
        size={25}
        color='#eb2f06'
        onPress={()=>props.removeTask(props.idkey)}
      />
      </View>
    );


   
};

const styles = StyleSheet.create({
    itemWrapper:{
    backgroundColor:'#0a3d62',
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    },
    taskListContainer:{
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center"
        

      },
    
      
})

export default TaskList;