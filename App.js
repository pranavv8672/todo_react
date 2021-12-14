import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null)

  };

  const completeTask = (index) =>{

    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy);

  };

  return (
    <View style={styles.container}>

      {/* Today's Task */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
             return <TouchableOpacity key = {index} onPress = {() => completeTask(index)} >
              <Task text = {item} />
             </TouchableOpacity> 
            })
          }
          {/* <Task text = {'Task 1'}/>
          <Task text = {'Task 2'}/> */}
        </View>
      </View>

      {/* Write a Task section */}
      <KeyboardAvoidingView 
        behavior = {Platform.OS === 'ios' ? 'padding': 'height'}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style = {styles.input} placeholder = {'Write a task'} value = {task} onChangeText = {task => setTask(task)} />
        <TouchableOpacity onPress = {() => handleAddTask()} >
          <View style = {styles. addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper:{
    paddingTop:  96,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 42,
  },
  writeTaskWrapper : {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    flexDirection : 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input : {
    paddingVertical: 15,
    paddingHorizontal:15,
    width: 278,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper : {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  addText : {},
});
